import { About, Global } from "@/types/about.type";
import { Education } from "@/types/education.type";
import fetchApi from "../lib/strapi";

export const getUploads = async () => {
  const uploads = await fetchApi({
    endpoint: "upload/files",
  });
  return uploads;
};

export const getEducations = async () => {
  const educations = await fetchApi<Education[]>({
    endpoint: "educations",
  });
  return educations;
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
