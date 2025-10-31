"use client";
import React from "react";
import "@/app/globals.css"; 
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Link, Button } from "@nextui-org/react";
import AboutAnimation from "@/app/components/AboutAnimation";
import { Bio } from "@/app/data/ConstantData";
import { HeroContainer, Img, HeroBg, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle} from "@/styles/aboutStyle";


export default function About(){

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <AboutAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am {Bio.name}</Title>
                        <TextLoop>
                        I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <div className="aboutResume">
                            <Button
                                href="https://github.com/nextui-org/nextui" target="display"
                                as={Link} className="aboutResumeButton"
                                color="primary"
                                showAnchorIcon
                                variant="solid"
                                >
                                Check Resume
                            </Button>
                        </div>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src="/images/profile.png" alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}