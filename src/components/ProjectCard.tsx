type ProjectProps = {
  project: {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
  };
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition p-5 flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 object-cover h-40 w-full"
      />
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-primary font-medium hover:underline"
      >
        Xem chi tiết →
      </a>
    </div>
  );
}