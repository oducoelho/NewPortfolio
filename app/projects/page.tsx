import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { ProjectsPageData, ProjectsPageStaticData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
  query ProjectsQuery {
    projects {
      shortDescription
      slug
      title
      thumbnail {
        url
      }
      technologies {
        name
      }
    }
  }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugQuery() {
      projects(first: 100) {
        slug
      }
    }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}