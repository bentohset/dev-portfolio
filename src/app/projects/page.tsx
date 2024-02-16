import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectsData } from '@/lib/data';
import { ProjectGrid, ProjectType } from '@/features/projects';

const filters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Self",
    value: "self",
  },
  {
    label: "Hackathons",
    value: "hack",
  },
]

const page = async () => {
  const projects: ProjectType[] = projectsData;
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Tabs defaultValue="all" className="text-center space-y-8">
        <TabsList>
          {filters.map((o) => (
            <TabsTrigger value={o.value} key={o.label} className='data-[state=active]:text-devPrimary'>{o.label}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all" className="">
          <ProjectGrid data={projects} />
        </TabsContent>
        <TabsContent value="self" className="">
          <ProjectGrid data={projects.filter((o) => o.type === "self")} />
        </TabsContent>
        <TabsContent value="hack" className="">
          <ProjectGrid data={projects.filter((o) => o.type === "hack")} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default page