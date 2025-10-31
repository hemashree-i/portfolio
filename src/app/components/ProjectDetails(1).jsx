
"use client";
import React from 'react';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import styled,{ keyframes } from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

export const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: #171721;
color: #F2F3F4;
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;
const slide = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-100%); }
  40% { transform: translateX(-200%); }
  60% { transform: translateX(-300%); }
  80% { transform: translateX(-400%); }
  100% { transform: translateX(0); }
`;
const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-height: 400px;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;
const ImageSlider = styled.div`
  display: flex;
  animation: ${slide} 10s infinite ease-in-out;
`;
const Image = styled.img`
  min-width: 100%;
  object-fit: cover;
`;
// const Image = styled.img`
//     width: 100%;
//     object-fit: cover;
//     border-radius: 12px;
//     margin-top: 30px;
//     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
// `;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: #F2F3F4;
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;
const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: #b1b2b3;
  @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;
const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;
const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #854CE6;
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color:#854CE620;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;
const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #F2F3F4;
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`; 
const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;
const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #F2F3F4;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #854CE6;
    ${({ dull }) => dull && `
        background-color: #1C1E27;
        color: #b1b2b3;
        &:hover {
            background-color: #1C1C2799;
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: #854CE699;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;
const ProjectMode = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-left: 12px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;



const ProjectDetails = ({openModal, setOpenModal}) =>{
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <ImageContainer>
                        {project?.image?.length > 0 ? (
                            <ImageSlider>
                            {project.image.map((img, index) => (
                                <Image key={index} src={img} alt={`Project image ${index + 1}`} />
                            ))}
                            </ImageSlider>
                        ) : (
                            <p>No images available</p>
                        )}
                    </ImageContainer>
                    <Title>{project.title}
                        <ProjectMode>{project.mode}</ProjectMode>
                    </Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag,index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project.description}</Desc>
                    {project.mode !== "Offical" && (
                        <ButtonGroup>
                            <Button dull href={project?.github} target='new'>View Code</Button>
                            <Button href={project?.webapp} target='new'>View Live App</Button>
                        </ButtonGroup>
                    )}
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ProjectDetails;