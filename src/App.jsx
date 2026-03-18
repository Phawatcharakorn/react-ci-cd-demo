import "./App.css"

function App() {
  return (
    <div className="container">
      <h1>React CI/CD Demo</h1>
      <p>This project is deployed using</p>

      <ul>
        <li>React + Vite</li>
        <li>Docker</li>
        <li>GitHub Actions</li>
        <li>AWS EC2</li>
      </ul>

      <button onClick={() => alert("CI/CD Working!")}>
        Test Button
      </button>
    </div>
  )
}

export default App