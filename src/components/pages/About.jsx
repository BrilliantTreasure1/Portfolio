import { Card } from '@mui/material';
import { devSkills } from '../../constants/Skills';

import Skill from '../Skill';
import { useEffect,useState } from 'react';

const About = () => {

    const [javascript ,setJavascript] = useState(0)
    const [html ,setHtml] = useState(0)
    const [css ,setCss] = useState(0)
    const [node ,setNode] = useState(0)
    const [react ,setReact] = useState(0)
    const [git ,setGit] = useState(0)

    useEffect(() => {
        const timer = setInterval(()=>{

            setJavascript(oldprogres => {
                const diff = Math.random() * 10;
                return Math.min(oldprogres + diff, 82)
            })
            setHtml(oldprogres => {
                const diff = Math.random() * 10;
                return Math.min(oldprogres + diff, 95)
            })
            setCss(oldprogres => {
                const diff = Math.random() * 10;
                return Math.min(oldprogres + diff, 90)
            })
            setNode(oldprogres => {
                const diff = Math.random() * 10;
                return Math.min(oldprogres + diff, 85)
            })
            setReact(oldprogres => {
                const diff = Math.random() * 10;
                return Math.min(oldprogres + diff, 83)
            })
            setGit(oldprogres => {
                const diff = Math.random() * 10;
                return Math.min(oldprogres + diff, 80)
            })
            return () => {
                clearTimeout(timer)
            }
        },500)
    },[])

    const {htmlSkill,cssSkill,reactSkill,gitSkill,jsSkill,nodeSkill} = devSkills
    return(
        <Card 
            sx={{
                height: "100vh",
                backgroundColor:"whitesmoke",
                overflowY: "scroll"
            }}
        >
            <Skill
            name={htmlSkill.name}
            value={html}
            icon={htmlSkill.icon}
            color={htmlSkill.color}
            />
            <Skill
            name={cssSkill.name}
            value={css}
            icon={cssSkill.icon}
            color={cssSkill.color}
            />
            <Skill
            name={jsSkill.name}
            value={javascript}
            icon={jsSkill.icon}
            color={jsSkill.color}
            />
            <Skill
            name={nodeSkill.name}
            value={node}
            icon={nodeSkill.icon}
            color={nodeSkill.color}
            />
            <Skill
            name={reactSkill.name}
            value={react}
            icon={reactSkill.icon}
            color={reactSkill.color}
            />
            <Skill
            name={gitSkill.name}
            value={git}
            icon={gitSkill.icon}
            color={gitSkill.color}
            />
        </Card>
    )
}

export default About