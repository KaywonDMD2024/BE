import React, { useState, useEffect } from "react";
import pb from "@/utils/pocketbase";
import '@/styles/rolling-paper.css';

const RollingPaper = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const records = await pb.collection("students").getFullList();
        setStudents(records);
        setCurrentStudent(records[0]);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (students.length > 0) {
        const randomIndex = Math.floor(Math.random() * students.length);
        setCurrentStudent(students[randomIndex]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [students]);

  if (!currentStudent) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Rolling In The BE</h1>
      <h3>자신이 되고 싶은 꿈 그리고 가능성을 적은 메시지</h3>
      <div className="rolling-paper">
        <p>{currentStudent.major}</p>
        <p>{currentStudent.rolling_b}</p>
        <p>- {currentStudent.student_num} {currentStudent.name} -</p>
      </div>
    </div>
  );
};

export default RollingPaper;
