"use server";

import { experiences, projects } from "./types";
import { experiencesData, projectsData } from "./data";

type ExperienceProps = (typeof experiencesData)[number];
type ProjectProps = (typeof projectsData)[number];

export async function getExperience({
  type,
  title,
  location,
  name,
  company,
  description,
  icon,
  date,
}: ExperienceProps) {
  return experiencesData.map((experience) => ({ ...experience }));
}

export async function getProject({
  title,
  description,
  tags,
  icon,
  imageUrl,
}: ProjectProps) {
  return projectsData.map((project) => ({ ...project }));
}
