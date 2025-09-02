import React from "react";
import { BsClipboard2Data } from "react-icons/bs";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import healthyImg from "@/public/HealthyCommunities.png";
import gxImg from "@/public/gx-preview.png";
import myerImg from "@/public/myersbriggs.png";
import easyA from "@/public/easy_apostrophe_demo.gif";
import cmIMG from "@/public/conceptmapper.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Engineer Intern",
    location: "Fidelity Investments | Durham, NC",
    description:
      "Engineered a generative AI tool allowing internal teams to quickly search for common production issues based on past MS Teams Messages",
    icon: React.createElement(BsClipboard2Data),
    date: "May 2025 - August 2025",
  },
  {
    title: "Product Management Intern",
    location: "OPN Healthcare | Los Angeles, CA",
    description:
      "Led a team of 13 data science interns with AGILE methodology to produce a cost modeling tool for oncology regimens and automate KPI dashboards ",
    icon: React.createElement(BsClipboard2Data),
    date: "September 2024 - Jan 2025",
  },
  {
    title: "Data Science Intern",
    location: "First American | Santa Ana, CA",
    description:
      "Developed Python scripts to innovate ETL process and reformed data integration process using R and SQL Server",
    icon: React.createElement(BsClipboard2Data),
    date: "June 2024 - September 2024",
  },
  {
    title: "Student Data Science Intern",
    location: "Poppin | Los Angeles, CA",
    description:
      "Engineered 1st data pipeline for social media startup with Snowflake, dbt, and Airflow. Visualized user/financial metrics in Power BI dashboard used directly in pitch securing Crunchbase funding.",
    icon: React.createElement(MdOutlineSpaceDashboard),
    date: "January 2024 - April 2024",
  },
  {
    title: "Undergraduate Teaching Assistant",
    location: "UCLA Mathematics | Los Angeles, CA",
    description:
      "Mentored peers in Introduction to Computer Science taught in C++, Introduction to Statistics taught in R, and Calculus I",
    icon: React.createElement(PiChalkboardTeacher),
    date: "September 2023 - December 2023",
  },
  {
    title: "Associate Substitute Instructor",
    location: "Benicia Unified School District | Benicia, CA",
    description:
      "Developed curriculum for K-5th grade students in summer program covering elementery algebra and mathematical intuition",
    icon: React.createElement(PiChalkboardTeacher),
    date: "June 2023 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Concept Mapper",
    description:
      "Created an AI-powered tool that transforms complex ideas into clear, connected maps for faster learning and new-hire onboarding",
    tags: ["TypeScript", "React", "Vite", "SupaBase"],
    imageUrl: cmIMG,
    link: "https://conceptmapper.vercel.app/",
  },
  {
    title: "Easy-Apostrophe",
    description:
      "Created a VS Code extension that makes creating lists of strings, comma-delimited items, and many more structures easier using TypeScript and VS Code deployment terminal",
    tags: ["TypeScript", "VS Code", "Github"],
    imageUrl: easyA,
  },
  {
    title: "Healthy Communities",
    description:
      "Conducted principal component analysis in Python to reduce a county health dataset and perform feature extraction to support evidence for established causes of physical inactivity",
    tags: ["Python", "Tableau", "PCA", "Machine Learning"],
    imageUrl: healthyImg,
  },
  {
    title: "Data-Valex",
    description:
      "Developed web application in React Native and TypeScript supported by Python library GX to perform simple binary and boolean operations on uploaded datasets",
    tags: ["React Native", "TypeScript", "Python", "Great Expectations"],
    imageUrl: gxImg,
  },
  {
    title: "NLP Application",
    description:
      "Created a framework in Flask performing exploratory data analysis and transformation on media data in Python and performed regression and classification tasks in PyTorch to predict personality types from social media post captions",
    tags: ["MongoDB", "Flask", "OpenAI API", "PyTorch"],
    imageUrl: myerImg,
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "R",
  "C++",
  "C",
  "TypeScript",
  "Java",
  "HTML",
  "CSS",
  "MATLAB",
  "Snowflake",
  "SQL Server",
  "MongoDB",
  "Kafka",
  "Spark",
  "Pandas",
  "React",
  "Git",
  "Linux",
  "AWS",
  "Kubernetes",
  "Tableau",
  "Vercel"

] as const;