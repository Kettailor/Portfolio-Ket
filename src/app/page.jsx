"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "../data/site.config";
import { projects } from "../data/projects.data";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Background gradient blob */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 blur-3xl rounded-full animate-pulse"></div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Xin chào, mình là{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-700">{site.role}</p>
          <p className="mt-4 text-gray-600">{site.description}</p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
            >
              Xem dự án
            </Link>
            <Link
              href="/contact"
              className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Liên hệ
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="justify-self-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>
          <Image
            src="/images/avatar.jpg"
            alt="Avatar"
            width={260}
            height={260}
            className="relative rounded-full object-cover shadow-xl border-4 border-white"
          />
        </motion.div>
      </section>

      {/* Projects preview */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Dự án nổi bật
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
