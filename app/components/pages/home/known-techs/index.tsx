'use client'

import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { KnownTech as IKnownTech } from "@/app/types/projects"

type KnownTechProps = {
  techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechProps) => {
  console.log(techs)
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech tech={tech} />
        ))}
      </div>
    </section>
  )
}