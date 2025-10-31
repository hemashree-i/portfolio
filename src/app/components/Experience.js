"use client";
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Container, Wrapper, Title, Desc, TimelineSection }  from "@/styles/experienceStyle";
import ExperienceCard  from "@/app/cards/ExperienceCard";
import { experiences } from "@/app/data/ConstantData";

export default function Experience(){

    return (
        <Container id="experience">
            <Wrapper>
            <Title>Experience</Title>
                <Desc>
                My work experience as a software engineer, along with other roles I&apos;ve undertaken in various companies and projects, has provided me with diverse expertise.
                </Desc>
                <TimelineSection>
                    <Timeline>
                    {experiences.map((experience,index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                        </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}