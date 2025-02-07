"use client"

import { experiencesData, projectsData } from "./data";

type ExperienceProps = (typeof experiencesData)[number];
type ProjectProps = (typeof projectsData)[number];

export type experiences = ExperienceProps;
export type projects = ProjectProps;
