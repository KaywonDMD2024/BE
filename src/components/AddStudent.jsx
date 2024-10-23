import React, { useState, useEffect } from 'react';
import pb from '@/utils/pocketbase';

const AddStudent = ({ onStudentAdded }) => {
    const [teams, setTeams] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: '',
        profile_image: null,
        major: 'designer',
        portfoilo: '',
        team_id: '',
        student_num: '',
        rolling_b: ''
    });

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const teamRecords = await pb.collection('team').getFullList();
                setTeams(teamRecords);
            } catch (error) {
                console.error("Error fetching teams:", error);
            }
        };
        fetchTeams();
    }, []);

    const addStudent = async () => {
        try {
            const formData = new FormData();
            formData.append('name', newStudent.name);
            formData.append('profile_image', newStudent.profile_image);
            formData.append('major', newStudent.major);
            formData.append('portfoilo', newStudent.portfoilo);
            formData.append('team_id', newStudent.team_id);
            formData.append('student_num', newStudent.student_num);
            formData.append('rolling_b', newStudent.rolling_b);

            const newStudentRecord = await pb.collection('students').create(formData);
            
            const expandedNewStudent = await pb.collection('students').getOne(newStudentRecord.id, {
                expand: 'team_id'
            });
            
            onStudentAdded(expandedNewStudent);
            setNewStudent({ name: '', profile_image: null, major: 'designer', portfoilo: '', team_id: '', student_num:'', rolling_b: '' });
        } catch (error) {
            console.error("Error creating student:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewStudent(prev => ({
            ...prev,
            profile_image: file
        }));
    };

    return (
        <div className="student-form">
            <h3>새 학생 추가</h3>
            <input
                type="text"
                name="name"
                placeholder="이름"
                value={newStudent.name}
                onChange={handleInputChange}
            />
            <input
                type="file"
                name="profile_image"
                accept="image/*"
                onChange={handleFileChange}
            />
            <select
                name="major"
                value={newStudent.major}
                onChange={handleInputChange}
            >
                <option value="designer">Designer</option>
                <option value="programmer">Programmer</option>
                <option value="planner">Planner</option>
            </select>
            <input
                type="url"
                name="portfoilo"
                placeholder="포트폴리오 URL"
                value={newStudent.portfoilo}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="student_num"
                placeholder="학번"
                value={newStudent.student_num}
                onChange={handleInputChange}
            />
            <textarea 
            name="rolling_b"
            placeholder="롤링인더비"
            value={newStudent.rolling_b}
            onChange={handleInputChange}
                ></textarea>
            <select
                name="team_id"
                value={newStudent.team_id}
                onChange={handleInputChange}
            >
                <option value="">팀 선택</option>
                {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </select>
            <button onClick={addStudent}>저장</button>
        </div>
    );
};

export default AddStudent;
