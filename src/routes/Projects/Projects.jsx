import React, { useEffect, useState } from "react";
import pb from '@/utils/pocketbase';
import { Link } from "react-router-dom";
import ProjectHeader from "@/components/ProjectHeader";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectRecords = await pb.collection('projects').getFullList({
                    expand: 'team'
                });
                setProjects(projectRecords);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // 카테고리 변경 핸들러
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // 필터링된 프로젝트 목록
    const filteredProjects = projects.filter((project) => {
        if (selectedCategory === 'ALL') {
            return true;
        }
        return project.project_field === selectedCategory;
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <ProjectHeader
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />
            <div className="project-list">
                {filteredProjects.map((project) => (
                    <Link to={`/projects/${project.id}`} key={project.id}>
                        <div className="project-item">
                            <img
                                src={project.project_thumbnail ? pb.baseUrl + `/api/files/${project.collectionId}/${project.id}/${project.project_thumbnail}` : '/default-thumbnail.png'}
                                alt={project.project_name}
                                className="project-thumbnail"
                            />
                            <p>{project.project_name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
