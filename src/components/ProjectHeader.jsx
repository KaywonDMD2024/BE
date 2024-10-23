import React from "react";
import "@/styles/project-header.css";

const ProjectHeader = ({ selectedCategory, onCategoryChange }) => {
    const categories = ['ALL', 'DIGITAL MEDIA', 'NEW MEDIA', 'MOVING IMAGE', '4 GRADE'];

    return (
        <div className="project-header">
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => onCategoryChange(category)} // 클릭 시 카테고리 변경 핸들러 호출
                        style={{ cursor: 'pointer' }}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectHeader;
