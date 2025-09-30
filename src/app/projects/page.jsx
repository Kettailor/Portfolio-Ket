import { projects } from "../../data/projects.data";
import ProjectCard from "../../components/ProjectCard";

export const metadata = { title: "Dự án" };

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (<ProjectCard key={p.slug} project={p}/>))}
      </div>
    </section>
  );
}
