import React, { useEffect, useState } from "react";
import pb from '@/utils/pocketbase';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileStudent from '@/components/ProfileStudent';
import AddStudent from '@/components/AddStudent';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchStudentsAndTeams = async () => {
            try {
                const studentRecords = await pb.collection('students').getFullList({
                    expand: 'team_id'
                });
                setStudents(studentRecords);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudentsAndTeams();
    }, []);

    // 카테고리 변경 핸들러
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // 검색어 변경 핸들러
    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    // 새 학생 추가 후 리스트 업데이트
    const handleStudentAdded = (newStudent) => {
        setStudents(prev => [...prev, newStudent]);
        setShowForm(false);
    };

    // 필터링된 학생 목록
    const filteredStudents = students.filter((student) => {
        const matchesCategory =
            selectedCategory === 'All' || student.major.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>학생 목록</h1>
            <ProfileHeader
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
            />
            <ProfileStudent students={filteredStudents} />
            <button onClick={() => setShowForm(true)}>+</button>
            {showForm && <AddStudent onStudentAdded={handleStudentAdded} />}
        </div>
    );
};

export default Students;
