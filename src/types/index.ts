import React from "react";

export interface DevProfile {
  fname: string;
  lname: string;
  title: string;
  bio: string;
  info?: string;
  tags: string[];
}

export interface Social {
  name: string;
  icon: React.ComponentType;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  languages: string[];
  tools: string[];
}

export interface DevData {
  profile: DevProfile;
  navLinks: string[];
  socials: Social[];
  projects: Project[];
  skills: Skills;
}
