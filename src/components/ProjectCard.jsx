import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition">
      <div className="relative">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="h-40 w-full object-cover group-hover:scale-105 transition"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          className="mt-4 inline-block text-blue-600 font-medium hover:underline"
        >
          Xem chi tiết →
        </a>
      </div>
    </article>
  );
}
