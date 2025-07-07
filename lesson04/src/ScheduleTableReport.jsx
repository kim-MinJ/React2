import { useState } from "react";

const schedules = [
    {
    date: "2025-07-01",
    todos: [
      {
        time: "09:00",
        text: "리액트 수업 복습",
        checked: true
      },
      {
        time: "11:00",
        text: "리액트 프로젝트 기획",
        checked: true
      },
      {
        time: "16:20",
        text: "데이터베이스 테스트",
        checked: false
      }
    ]
  },
  {
    date: "2025-07-06",
    todos: [
      {
        time: "09:40",
        text: "자바 클래스 ",
        checked: false
      },
      {
        time: "12:00",
        text: "운동",
        checked: false
      },
      {
        time: "13:50",
        text: "데이터베이스 구축",
        checked: false
      }
    ]
  },
  {
    date: "2025-07-09",
    todos: [
      {
        time: "11:20",
        text: "AI 프로젝트",
        checked: false
      },
      {
        time: "14:00",
        text: "팀프로젝트 회의",
        checked: false
      }
    ]
  }
]
//schedule 는 상태 변수. 버튼을 클릭할 때마다 

export default function ScheduleTableReport() {
  const [schedule, setSchedule] = useState(schedules[0]);

  const handleSelected = (idx) => {
    setSchedule(schedules[idx.date]);
  };

  return (
    <div
      className="container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {schedules.map((sch, idx) => (
          <button
            key={idx}
            onClick={() => handleSelected(idx)}
            disabled={schedule.date === sch.date}
            style={{
              margin: "0 5px",
              padding: "8px 16px",
              backgroundColor: schedule.date === sch.date ? "#ccc" : "#007bff",
              color: schedule.date === sch.date ? "#666" : "white",
              border: "none",
              borderRadius: "4px",
              cursor: schedule.date === sch.date ? "not-allowed" : "pointer",
            }}
          >
            {sch.date}
          </button>
        ))}
      </div>
      <hr />
      <h3 style={{ color: "#333", marginBottom: "1rem" }}>{schedules.date}</h3>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                textAlign: "center",
              }}
            >
              TIME
            </th>
            {schedule.todos.map((t, idx) => (
              <th
                key={`time-${idx}`}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {t.time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              TODO
            </td>
            {schedule.todos.map((t, idx) => (
              <td
                key={`text-${idx}`}
                style={{ padding: "10px", textAlign: "center" }}
              >
                {t.text}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
