import React from "react";
import StudentsHeader from "./components/StudentsHeader";
import ProfileComponent from "./components/ProfileComponent";

// 예시로 사용할 학생 데이터
const studentData = [
  { id: 1, name: "학생 1", imageSrc: "./assets/student1.jpeg" },
  { id: 2, name: "학생 2", imageSrc: "./assets/student2.jpeg" },
  { id: 3, name: "학생 3", imageSrc: "./assets/student3.jpeg" },
];

const Students = () => {
  return (
    <div>
      <StudentsHeader />
      <h1>클리커 게임</h1>
      <p>이곳에서 클리커 게임을 플레이하세요.</p>
      <div className="profile-list">
        {studentData.map((student) => (
          <ProfileComponent
            key={student.id}
            name={student.name}
            imageSrc={student.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;
