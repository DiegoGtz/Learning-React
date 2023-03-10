const Skills = ({skills})=>{

    const allSkills = skills.map((skill) =><li key={skill}>{skill}</li>)
    console.log(allSkills)

    return (
        <ul className="skills-style">
            {allSkills}
        </ul>
    )
}

export default Skills