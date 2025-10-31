"use client";
import React from "react";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbars from "@/app/components/Navbar";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import ProjectDetails from "@/app/components/ProjectDetails";
import Educations from "@/app/components/Education";
import  ContactsForm from "@/app/components/Contact";

import "@/app/globals.css";

export default function Home() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <NextUIProvider>
      <main className="purple-dark text-foreground bg-background">
        <Navbars />
        <div className="page-body">
          <About />
          <div className="page-wrapper">
            <Skills />
            <Experience />
          </div>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <div>
            <Educations />
            <ContactsForm />
          </div>
        </div>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </main>
    </NextUIProvider>
  );
}
