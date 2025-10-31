"use client"
import React from "react";
import { useState } from "react";
import { Container,Wrapper,Title,Desc,ToggleButtonGroup,ToggleButton,Divider,CardContainer } from "@/styles/projectStyle";
import ProjectCards  from "@/app/cards/ProjectCards";
import { projects } from "@/app/data/ConstantData";


const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of web app projects.Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    {toggle === 'all' ? 
                        <ToggleButton $active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                        :
                        <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    }
                    <Divider/>
                    {toggle === 'web app' ?
                        <ToggleButton $active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                        :
                        <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                    }
                    <Divider/>
                    {toggle === 'api' ?
                        <ToggleButton $active value="api" onClick={() => setToggle('api')}>API</ToggleButton>
                        :
                        <ToggleButton value="api" onClick={() => setToggle('api')}>API</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && projects
                    .map((projects) => (
                        <ProjectCards key={projects.id} project={projects} openModal={openModal} setOpenModal={setOpenModal}/>
                    ))}
                    {projects
                        .filter((item) => item.category == toggle)
                        .map((projects) => (
                            <ProjectCards key={projects.id} project={projects} openModal={openModal} setOpenModal={setOpenModal}/>
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects