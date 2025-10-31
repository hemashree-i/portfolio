"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { DiCssdeck } from 'react-icons/di';
import "@/app/globals.css";

export default function Navbars() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Education",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand> {/* Integrate the NavLogo component */}
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
                        <DiCssdeck size="3rem" /> <span style={{ fontSize: "18px", fontWeight: "bold", margin: "0px" }}>Portfolio</span>
                    </a>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#about" className="about-link nav-bar-list hover:text-violet-500 ">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#skills" color="foreground" className="skills-link nav-bar-list hover:text-violet-500">
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#experience" className="exp-link nav-bar-list hover:text-violet-500">
                        Experience
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#projects" className="proj-link nav-bar-list hover:text-violet-500">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="edu-link nav-bar-list hover:text-violet-500">
                        Education
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            // color={
                            //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            // }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
