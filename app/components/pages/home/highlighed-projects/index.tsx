import { HiArrowNarrowRight } from "react-icons/hi"

import { ProjectCard } from "./project-card"
import { SectionTitle } from "@/app/components/section-title"
import { HorizontalDivider } from "@/app/components/devider/horizontal"
import { Link } from "@/app/components/link"

export const HighLightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider  className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href='/projects' className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}