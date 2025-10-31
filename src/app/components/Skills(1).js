"use client";
import React from 'react';
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage }  from "@/styles/skillsStyle";
import { Card } from "@nextui-org/react";
import { skillSets } from "@/app/data/ConstantData";

export default function Skills(){
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of my skills on which I have been working on for the past 8 years.</Desc>
                <SkillsContainer>
                    {skillSets.map((skill,index) =>(
                        <Card className='w-full max-w-[500px] bg-[#171721] border border-[0.1px] border-purple-600 shadow-lg rounded-lg p-[18px] md:max-w-[400px] md:p-[10px] sm:max-w-[330px] sm:p-[10px]' key={index}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item ,index) => (
                                <SkillItem key={index}>
                                     <SkillImage src={item.image}/>
                                     {item.name}
                                </SkillItem>
                                ))}
                            </SkillList>
                        </Card>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}