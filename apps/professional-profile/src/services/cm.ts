import fetchApi from "../lib/strapi";
import { About, Global } from "@/types/about.type";
import { Educations } from "@/types/education.type";
import { Experiences } from "@/types/experience.type";
import { Projects } from "@/types/project.type";

export const getUploads = async () => {
  const uploads = await fetchApi({
    endpoint: "upload/files",
  });
  return uploads;
};

export const getEducations = async () => {
  const educations = await fetchApi<Educations>({
    endpoint: "educations",
  });
  return educations.data;
};

export const getExperiences = async () => {
  const experiences = await fetchApi<Experiences>({
    endpoint: "experiences",
  });
  return experiences.data;
};

export const getProjects = async () => {
  const projects = await fetchApi<Projects>({
    endpoint: "projects",
  });
  return projects.data;
};

export const getProfileImage = async () => {
  const uploads: any = await getUploads();
  const profileImageUrl = uploads.filter((upload: any) =>
    upload.name.includes("profile-image")
  );
  return profileImageUrl[0].url;
};

export const getAbout = async () => {
  const about = await fetchApi<About>({
    endpoint: "about",
  });
  return about.data;
};

export const getGlobal = async () => {
  const global = await fetchApi<Global>({
    endpoint: "global",
  });
  return global.data;
};
