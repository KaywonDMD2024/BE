import React from 'react';
import AddProject from '@/components/AddProject';
import '@/styles/main.css'
const AddProjectPage = () => {
    const handleProjectAdded = (newProject) => {
        alert(`새 프로젝트가 추가되었습니다: ${newProject.project_name}`);
    };

    return (
        <div className="add-project-page">
            <AddProject onProjectAdded={handleProjectAdded} />
        </div>
    );
};

export default AddProjectPage;
