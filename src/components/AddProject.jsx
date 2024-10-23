import React, { useState, useEffect } from 'react';
import pb from '@/utils/pocketbase';
import '@/styles/add-project.css'

const AddProject = ({ onProjectAdded }) => {
    const [teams, setTeams] = useState([]);
    const [newProject, setNewProject] = useState({
        project_name: '',
        team_id: '',
        project_img: null,
        project_thumbnail: null,
        project_introduce: '',
        project_explanation: '',
        project_field: 'DIGITAL MEDIA',
        project_field_kr: '디지털미디어디자인',
        project_url: '',
        project_medium: '',
        project_target: ''
    });
    const [fileNames, setFileNames] = useState({
        project_img: '',
        project_thumbnail: ''
    });

    useEffect(() => {
        let isCancelled = false; // 요청이 취소되었는지 확인하는 변수

        const fetchTeams = async () => {
            try {
                const teamRecords = await pb.collection('team').getFullList();
                if (!isCancelled) { // 컴포넌트가 여전히 마운트된 상태에서만 상태 업데이트
                    setTeams(teamRecords);
                }
            } catch (error) {
                if (!isCancelled) {
                    console.error("Error fetching teams:", error);
                }
            }
        };
        fetchTeams();

        return () => {
            isCancelled = true; // 컴포넌트가 언마운트될 때 요청을 취소하지 않도록 설정
        };
    }, []);

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setNewProject(prev => ({
            ...prev,
            [name]: file
        }));
        setFileNames(prev => ({
            ...prev,
            [name]: file ? file.name : ''
        }));
    };

    const addProject = async () => {
        if (!newProject.team_id) {
            alert("팀을 선택해주세요.");
            return;
        }
        try {
            const formData = new FormData();
            formData.append('project_name', newProject.project_name);
            formData.append('team_id', newProject.team_id);
            if (newProject.project_img) formData.append('project_img', newProject.project_img);
            if (newProject.project_thumbnail) formData.append('project_thumbnail', newProject.project_thumbnail);
            formData.append('project_introduce', newProject.project_introduce);
            formData.append('project_explanation', newProject.project_explanation);
            formData.append('project_field', newProject.project_field);
            formData.append('project_field_kr', newProject.project_field_kr);
            formData.append('project_url', newProject.project_url);
            formData.append('project_medium', newProject.project_medium);
            formData.append('project_target', newProject.project_target);

            const newProjectRecord = await pb.collection('projects').create(formData);

            const expandedNewProject = await pb.collection('projects').getOne(newProjectRecord.id, {
                expand: 'team'
            });

            onProjectAdded(expandedNewProject);
            setNewProject({
                project_name: '',
                team_id: '',
                project_img: null,
                project_thumbnail: null,
                project_introduce: '',
                project_explanation: '',
                project_field: 'DIGITAL MEDIA',
                project_field_kr: '디지털미디어디자인',
                project_url: '',
                project_medium: '',
                project_target: ''
            });
            setFileNames({
                project_img: '',
                project_thumbnail: ''
            });
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="project-form">
            <h3>새 프로젝트 추가</h3>
            <input
                type="text"
                name="project_name"
                placeholder="프로젝트 이름"
                value={newProject.project_name}
                onChange={handleInputChange}
            />
            
            {/* 대표 이미지 업로드 */}
            <label htmlFor="project_img" className="upload-button">
                대표 이미지 업로드
            </label>
            <input
                type="file"
                id="project_img"
                name="project_img"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {fileNames.project_img && <p>{fileNames.project_img}</p>}

            {/* 썸네일 이미지 업로드 */}
            <label htmlFor="project_thumbnail" className="upload-button">
                썸네일 이미지 업로드
            </label>
            <input
                type="file"
                id="project_thumbnail"
                name="project_thumbnail"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {fileNames.project_thumbnail && <p>{fileNames.project_thumbnail}</p>}
            <textarea
                name="project_introduce"
                placeholder="프로젝트 한 줄 소개"
                value={newProject.project_introduce}
                onChange={handleInputChange}
            />
            <textarea
                name="project_explanation"
                placeholder="프로젝트 설명"
                value={newProject.project_explanation}
                onChange={handleInputChange}
            />
            <select
                name="project_field"
                value={newProject.project_field}
                onChange={handleInputChange}
            >
                <option value="DIGITAL MEDIA">DIGITAL MEDIA</option>
                <option value="NEW MEDIA">NEW MEDIA</option>
                <option value="MOVING IMAGE">MOVING IMAGE</option>
                <option value="4 GRADE">4 GRADE</option>
            </select>
            <select
                name="project_field_kr"
                value={newProject.project_field_kr}
                onChange={handleInputChange}
            >
                <option value="디지털미디어디자인">디지털미디어디자인</option>
                <option value="뉴미디어">뉴미디어</option>
                <option value="영상디자인">영상디자인</option>
            </select>
            <input
                type="url"
                name="project_url"
                placeholder="프로젝트 URL"
                value={newProject.project_url}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="project_medium"
                placeholder="프로젝트 매체"
                value={newProject.project_medium}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="project_target"
                placeholder="프로젝트 대상"
                value={newProject.project_target}
                onChange={handleInputChange}
            />
            <button onClick={addProject}>저장</button>
        </div>
    );
};

export default AddProject;
