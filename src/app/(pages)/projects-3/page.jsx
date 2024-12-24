import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

const ProjectsMasonry = dynamic( () => import("@/src/app/_components/AkamshPortfolio"), { ssr: false } );

import { getSortedProjectsData } from "@/src/app/_lib/portfolio";

export const metadata = {
  title: {
		default: "Projects 3",
	},
  description: AppData.settings.siteDescription,
}

async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsMasonry projects={projects} categories={AppData.projects.categories} columns={3} />
      </Suspense>
    </>
  );
};
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}