import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import pb from '@/utils/pocketbase';
import '@/styles/project-detail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hovered, setHovered] = useState(false); // hover 상태

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const projectRecord = await pb.collection('projects').getOne(id, {
                    expand: 'team.team_id,team.students'
                });
                setProject(projectRecord);
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!project) {
        return <p>프로젝트를 찾을 수 없습니다.</p>;
    }

    const students = project.expand?.team?.expand?.students || [];
    const Project_URL = project.project_url;


    // 팀 이미지 배열 가져오기
    const teamImages = project?.expand?.team?.team_img || [];
    const teamImageUrl = (index) => `${pb.baseUrl}/api/files/${project.expand.team.collectionId}/${project.expand.team.id}/${teamImages[index]}`;

    return (
        <div className="project-detail">
            <Link to="/projects">X</Link>
            <br/>
            <img
                src={project.project_img ? pb.baseUrl + `/api/files/${project.collectionId}/${project.id}/${project.project_img}` : '/default-image.png'}
                alt={project.project_name}
                className="project-image"
            />
            <button onClick={() => window.open(Project_URL, '_blank')}>→</button>
            
            <p>{project.project_field}</p>
            <p>Team. {project.expand?.team?.name}</p>
            <h1>{project.project_name}</h1>
            <p>{project.project_introduce}</p>
            <div className="project-content">
                <p>{project.project_explanation}</p>
                <p>분야: {project.project_field_kr}</p>
                <p>매체: {project.project_medium}</p>
                <p>대상: {project.project_target}</p>
            </div>
            <div className="team-students">
                <h3>팀원</h3>
                    <img 
                        src={hovered && teamImages.length > 1 ? teamImageUrl(1) : teamImageUrl(0)}
                        alt="팀 이미지"
                        className="team-image"
                        onMouseEnter={() => setHovered(true)} // 마우스 hover 시작 시
                        onMouseLeave={() => setHovered(false)} // 마우스 hover 끝날 때
                        style={{ cursor: 'pointer' }}
                    />
                {students.length > 0 ? (
                    <div className="students-list">
                        {students.map((student) => (
                            <div key={student.id} className="student-card">
                                <p>{student.name}</p>
                                <p>{student.major.toUpperCase()}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>팀원이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
