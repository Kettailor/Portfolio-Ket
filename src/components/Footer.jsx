import { site } from "../data/site.config";

export default function Footer() {
  return (
    <footer className="border-t mt-16 py-8 text-center text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="mt-2 space-x-4">
          {site.socials.github && <a href={site.socials.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>}
          {site.socials.linkedin && <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>}
          {site.socials.facebook && <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="underline">Facebook</a>}
          {site.socials.x && <a href={site.socials.x} target="_blank" rel="noreferrer" className="underline">X</a>}
        </div>
      </div>
    </footer>
  );
}
