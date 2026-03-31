import Link from "next/link";
import { curriculum } from "@/data/curriculum";
import { CheckCircle2, ChevronRight, Lock } from "lucide-react";

export default function AcademyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-white">The Star Map</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Your curriculum across the galaxy. Complete planets in order to master C++ and earn your badges.
        </p>
      </div>

      <div className="space-y-16 relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-indigo-500/0 before:via-indigo-500/30 before:to-indigo-500/0">
        {curriculum.map((planet, index) => (
          <div key={planet.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

            {/* Timeline Marker */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-slate-900 bg-slate-800 shadow-[0_0_20px_rgba(99,102,241,0.2)] md:order-1 md:mx-auto md:translate-x-0 shrink-0 z-10 transition-transform duration-500 group-hover:scale-110">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${planet.color} flex items-center justify-center font-bold text-white text-xl`}>
                {index}
              </div>
            </div>

            {/* Planet Card */}
            <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-indigo-500/50 transition-colors shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-2">{planet.name}</h2>
              <p className="text-slate-400 mb-6">{planet.description}</p>

              <div className="space-y-2">
                {planet.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/academy/${planet.slug}/lesson/${lesson.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors group/lesson"
                  >
                    <span className="text-slate-300 font-medium group-hover/lesson:text-white transition-colors">{lesson.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover/lesson:text-white transition-colors" />
                  </Link>
                ))}

                {planet.project && (
                  <Link
                    href={`/academy/${planet.slug}/project/${planet.project.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-indigo-900/30 hover:bg-indigo-900/50 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors group/project mt-4"
                  >
                    <span className="text-indigo-300 font-bold group-hover/project:text-indigo-200 transition-colors">Mission: {planet.project.title}</span>
                    <ChevronRight className="w-4 h-4 text-indigo-400 group-hover/project:text-indigo-300 transition-colors" />
                  </Link>
                )}

                {planet.quiz && (
                  <Link
                    href={`/academy/${planet.slug}/quiz`}
                    className="flex items-center justify-between p-3 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-colors group/quiz"
                  >
                    <span className="text-purple-300 font-bold group-hover/quiz:text-purple-200 transition-colors">Quiz: {planet.quiz.title}</span>
                    <ChevronRight className="w-4 h-4 text-purple-400 group-hover/quiz:text-purple-300 transition-colors" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
