import { notFound } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

export default function LessonPage({
  params,
}: {
  params: { planetSlug: string; lessonSlug: string };
}) {
  const planet = curriculum.find((p) => p.slug === params.planetSlug);
  if (!planet) return notFound();

  const lessonIndex = planet.lessons.findIndex(
    (l) => l.slug === params.lessonSlug
  );
  if (lessonIndex === -1) return notFound();

  const lesson = planet.lessons[lessonIndex];
  const nextLesson = planet.lessons[lessonIndex + 1];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/academy"
        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Star Map
      </Link>

      <article className="prose prose-invert prose-indigo max-w-none bg-slate-900/80 p-10 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl">
        <h1 className="text-4xl font-black text-white mb-2">{lesson.title}</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-10">
          {planet.name} • Lesson {lessonIndex + 1}
        </p>

        <div className="text-slate-300 leading-relaxed text-lg space-y-6 whitespace-pre-wrap">
          {lesson.content.split('\n').map((paragraph, i) => {
            if (paragraph.startsWith('```')) {
               return <div key={i} className="p-4 bg-slate-950 rounded-xl font-mono text-sm text-green-400 border border-slate-800 my-6 shadow-inner overflow-x-auto">{paragraph.replace(/```(cpp)?/g, '')}</div>;
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i} className="text-white font-bold text-2xl mt-8">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </article>

      <div className="mt-12 flex items-center justify-between">
        <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition-colors">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Mark as Read
        </button>

        {nextLesson ? (
          <Link
            href={`/academy/${planet.slug}/lesson/${nextLesson.slug}`}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
          >
            Next Lesson
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : planet.project ? (
          <Link
            href={`/academy/${planet.slug}/project/${planet.project.slug}`}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
          >
            Start Mission
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : planet.quiz ? (
          <Link
            href={`/academy/${planet.slug}/quiz`}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-purple-500/20"
          >
            Take Quiz
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : (
          <Link
            href="/academy"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors"
          >
            Return to Map
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
}
