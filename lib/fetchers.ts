"use server";

import { experiences, projects } from "./types";
import { experiencesData, projectsData } from "./data";

type ExperienceProps = (typeof experiencesData)[number];
type ProjectProps = (typeof projectsData)[number];

export async function getExperience({
  ...experience
}: ExperienceProps) {
  return experiencesData.map((experience) => ({ ...experience }));
}

export async function getProject({
  ...project
}: ProjectProps) {
  return projectsData.map((project) => ({ ...project }));
}
