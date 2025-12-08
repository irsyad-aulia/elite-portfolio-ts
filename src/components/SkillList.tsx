import { useState } from "react";

export default function SkillList() {
    const [skills, setSkills] = useState<string[]>(["HTML", "CSS", "TypeScript"]);
    const [newSkill, setNewSkill] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSkill(e.target.value);
    };

    const handleAdd = () => {
        if (!newSkill) return;
        setSkills([...skills, newSkill]);
        setNewSkill("");
    };
return (
    <div style={{ padding: 20, border: "1px solid #ccc", marginTop: 20, borderRadius: 8 }}>
        <h2>My Elite Skills</h2>

        <div style={{ marginBottom: 10 }}>
            <input
            type="text"
            value={newSkill}
            onChange={handleChange}
            placeholder="Add new skill..."
            style={{ padding: 8, marginRight: 5 }}
            />
            <button onClick={handleAdd} style={{ padding: 8 }}>Add</button>
        </div>

        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
);
}