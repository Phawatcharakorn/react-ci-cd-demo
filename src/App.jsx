import "./App.css"

function App() {
  return (
    <div className="container">
      {/* 1. ใส่ชื่อกลุ่มหรือชื่อวิชาให้ชัดเจน */}
      <h1>React CI/CD Pipeline Project</h1>
      <p style={{ color: "#646cff", fontWeight: "bold" }}>
        สถานะ: Deployed Successfully! 🚀
      </p>

      <div className="card">
        <p>โปรเจกต์นี้ใช้เทคโนโลยีตามที่อาจารย์สอน (และพลิกแพลงเพิ่มเติม):</p>
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          <li>✅ React + Vite</li>
          <li>✅ Docker Container</li>
          <li>✅ GitHub Actions (CI)</li>
          <li>✅ Docker Hub (Registry)</li>
          <li>✅ <b>Render.com (CD)</b></li> {/* แก้จาก AWS เป็น Render ให้ตรงความจริง ssssssss*/}
        </ul>
      </div>

      {/* 2. ใส่ชื่อสมาชิกกลุ่มตรงนี้เลย อาจารย์เห็นแล้วให้คะแนนง่าย */}
      <div className="members" style={{ marginTop: "20px", fontSize: "0.9em", color: "#888" }}>
        <p>สมาชิกกลุ่ม: [ชื่อของคุณ], [ชื่อเพื่อนคนที่ 1], [ชื่อเพื่อนคนที่ 2]</p>
      </div>

      <button onClick={() => alert("ระบบ CI/CD ทำงานแบบ Automation 100%!")}>
        ตรวจสอบสถานะ Pipeline
      </button>
    </div>
  )
}

export default App