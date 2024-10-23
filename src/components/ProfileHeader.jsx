import React from 'react';

const ProfileHeader = ({ selectedCategory, onCategoryChange, searchTerm, onSearchChange }) => {
    const categories = ['All', 'Planner', 'Designer', 'Programmer'];

    return (
        <div className="profile-header">
            <div className="categories">
                {categories.map((category) => (
                    <span
                        key={category}
                        className={`category ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => onCategoryChange(category)} // 클릭 시 카테고리 변경 핸들러 호출
                        style={{ cursor: 'pointer' }}
                    >
                        {category}
                    </span>
                ))}
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)} // 입력 시 검색어 변경 핸들러 호출
                />
                <button>🔍</button>
            </div>
        </div>
    );
};

export default ProfileHeader;
