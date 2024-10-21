import React from 'react';

interface skills{
    id:number;
    name:string;
    comfort_level:number;
    description:string;
}

const skillSet: skills[]=[
    {id:1 ,name : "java",comfort_level:7,description:"hjkdbvbjnhndksjbvsJD nkbhjkb jdbvknjk"},
    {id:2 ,name : "python",comfort_level:6,description:"hjkdbvbjnhndksjbvsJD nkbhjkb jdbvknjk"},
    {id:3 ,name : "sql",comfort_level:8,description:"hjkdbvbjnhndksjbvsJD nkbhjkb jdbvknjk"},
    {id:4 ,name : "javascript",comfort_level:5,description:"hjkdbvbjnhndksjbvsJD nkbhjkb jdbvknjk"},
];


const Skills:React.FC=()=>{
    return(
        <div>
            <h1>SKILLS</h1>
            <ul>
                {skillSet.map(skill=>(
                    <li key={skill.id}>
                        <h1>{skill.name}</h1>
                        <h3>{skill.comfort_level}</h3>
                        <p>{skill.description}</p>
                    </li>
                ))}
            </ul>
        </div>  
    );
}

export default Skills;