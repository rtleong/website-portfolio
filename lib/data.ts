import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Data Science Intern",
    location: "First American | Santa Ana, CA",
    description:
      "Reformed data integration process using R and SQL Server and developed Python scripts to innovate ETL process",
    icon: React.createElement(LuGraduationCap),
    date: "June 2024 - September 2024",
  },
  {
    title: "Student Data Science Intern",
    location: "Poppin | Los Angeles, CA",
    description:
      "Engineered 1st data pipeline for social media startup with Snowflake, dbt, and Airflow. Visualized user/financial metrics in Power BI dashboard used directly in pitch securing Crunchbase funding.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - April 2024",
  },
  {
    title: "Undergraduate Teaching Assistant",
    location: "UCLA Mathematics | Los Angeles, CA",
    description:
      "Mentored peers in Introduction to Computer Science taught in C++, Introduction to Statistics taught in R, and Calculus I",
    icon: React.createElement(FaReact),
    date: "September 2023 - December 2023",
  },
  {
    title: "Associate Substitute Instructor",
    location: "Benicia Unified School District | Benicia, CA",
    description:
      "Developed curriculum for K-5th grade students in summer program covering elementery algebra and mathematical intuition",
    icon: React.createElement(FaReact),
    date: "June 2023 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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