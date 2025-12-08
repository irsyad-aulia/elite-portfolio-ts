import Card from "./components/Card";
import SkillList from "./components/SkillList";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard Elite</h1>
      

      <Card title="Learn React" views={100} isNew={true} />

      <SkillList />

    </div>
  )
}

export default App;