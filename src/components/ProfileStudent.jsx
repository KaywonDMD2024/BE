import React, { useEffect, useState } from "react";
import pb from '@/utils/pocketbase';
import { getPbImageURL } from '@/utils/getPbImageURL';
import '@/styles/profile-student.css';

const ProfileStudent = ({ students }) => {
    return (
        <div className="profile-list">
            {students.map((student) => {
                const portfolioUrl = student.portfoilo || ''; 
                const majorUpperCase = student.major.toUpperCase();
                return (
                    <div key={student.id} className="profile-item">
                        <img 
                            src={student.profile_image ? getPbImageURL(pb.baseUrl, student, 'profile_image') : '/default-profile.png'} 
                            alt={`${student.name || '학생'} 프로필`} 
                            onError={(e) => e.target.src = '/default-profile.png'}
                            onClick={() => window.open(portfolioUrl, '_blank')}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>{student.name}</p>
                        <p>{student.expand?.team_id?.name || '팀 없음'} | {majorUpperCase}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProfileStudent;
