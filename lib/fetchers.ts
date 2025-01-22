"use server";

import { NextRequest } from "next/server";
import { Experience } from "./types";

export async function getExperience(): Promise<Experience[]> {
  return await fetch("https://api.github.com/users/ottatinicolas91/repos").then(res => res.json());
}

export async function getExperienceById(id: string): Promise<Experience> {
  return await fetch(`https://api.github.com/users/ottatinicolas91/repos/${id}`).then(res => res.json());
}