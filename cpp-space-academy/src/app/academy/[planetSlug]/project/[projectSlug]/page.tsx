import { notFound } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle, Code2, Play } from "lucide-react";

export default function ProjectPage({
  params,
}: {
  params: { planetSlug: string; projectSlug: string };
}) {
  const planet = curriculum.find((p) => p.slug === params.planetSlug);
  if (!planet || !planet.project || planet.project.slug !== params.projectSlug) {
    return notFound();
  }

  const project = planet.project;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/academy"
        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Star Map
      </Link>

      <div className="bg-slate-900/80 p-10 rounded-3xl border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.1)] backdrop-blur-xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-indigo-500/20 rounded-2xl border border-indigo-500/30 text-indigo-400">
            <Code2 className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-white">{project.title}</h1>
            <p className="text-indigo-400 font-bold tracking-widest uppercase text-sm mt-1">
              Mission Directive • {planet.name}
            </p>
          </div>
        </div>

        <p className="text-xl text-slate-300 leading-relaxed mb-10 border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-500/5 rounded-r-xl">
          {project.description}
        </p>

        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Play className="w-5 h-5 text-indigo-400" />
          Mission Steps
        </h3>

        <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
          {project.instructions.split('\n').map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold border border-slate-700">
                {i + 1}
              </div>
              <p className="text-slate-300 pt-1 leading-relaxed">{step.replace(/^\d+\.\s*/, '')}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <button className="flex items-center gap-2 px-8 py-4 bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-500/50 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]">
          <CheckCircle className="w-6 h-6" />
          Mark Mission Complete
        </button>

        {planet.quiz ? (
          <Link
            href={`/academy/${planet.slug}/quiz`}
            className="flex items-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-purple-500/20"
          >
            Take Final Quiz
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : (
          <Link
            href="/academy"
            className="flex items-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
          >
            Return to Map
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
}
