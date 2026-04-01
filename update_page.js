const fs = require('fs');

const path = 'cpp-space-academy/src/app/academy/[planetSlug]/lesson/[lessonSlug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The logic inside content.split('\n').map needs to parse code blocks properly.
// A code block spans multiple lines starting with ``` and ending with ```.
// The current logic only checks if a single paragraph starts with ```.

const newContent = `
"use client";

import { notFound, useRouter, useParams } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const planetSlug = params?.planetSlug as string;
  const lessonSlug = params?.lessonSlug as string;

  const planet = curriculum.find((p) => p.slug === planetSlug);
  if (!planet) return notFound();

  const lessonIndex = planet.lessons.findIndex(
    (l) => l.slug === lessonSlug
  );
  if (lessonIndex === -1) return notFound();

  const lesson = planet.lessons[lessonIndex];
  const nextLesson = planet.lessons[lessonIndex + 1];

  const handleMarkComplete = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes(lesson.id)) {
      completed.push(lesson.id);
      localStorage.setItem('completedLessons', JSON.stringify(completed));
    }

    if (nextLesson) {
      router.push(\`/academy/\${planet.slug}/lesson/\${nextLesson.slug}\`);
    } else if (planet.project) {
      router.push(\`/academy/\${planet.slug}/project/\${planet.project.slug}\`);
    } else if (planet.quiz) {
      router.push(\`/academy/\${planet.slug}/quiz\`);
    } else {
      router.push('/academy');
    }
  };

  // Process the markdown-like content into blocks
  const lines = lesson.content.split('\\n');
  const blocks = [];
  let currentBlockType = 'text';
  let currentBlockContent = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('\`\`\`')) {
      if (currentBlockType === 'code') {
        // End of code block
        blocks.push({ type: 'code', content: currentBlockContent.join('\\n') });
        currentBlockContent = [];
        currentBlockType = 'text';
      } else {
        // Start of code block
        if (currentBlockContent.length > 0) {
           blocks.push({ type: 'text', content: currentBlockContent.join('\\n') });
           currentBlockContent = [];
        }
        currentBlockType = 'code';
      }
    } else {
      currentBlockContent.push(line);
    }
  }
  if (currentBlockContent.length > 0) {
    blocks.push({ type: currentBlockType, content: currentBlockContent.join('\\n') });
  }

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

        <div className="text-slate-300 leading-relaxed text-lg space-y-6">
          {blocks.map((block, i) => {
            if (block.type === 'code') {
               return (
                  <div key={i} className="my-6 rounded-xl overflow-hidden border border-slate-800 shadow-inner">
                    <div className="h-6 bg-slate-950 border-b border-slate-800/50 flex items-center px-4 rounded-t-xl">
                       <div className="w-3 h-3 rounded-full bg-red-500/50 mr-2"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50 mr-2"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <pre className="p-4 bg-[#0d1117] font-mono text-sm text-slate-300 overflow-x-auto m-0">
                       <code>{block.content}</code>
                    </pre>
                    <div className="h-6 bg-slate-950 border-t border-slate-800/50 rounded-b-xl"></div>
                  </div>
               );
            }

            // Text blocks
            return block.content.split('\\n').map((paragraph, j) => {
              if (!paragraph.trim()) return null;
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <h3 key={\`\${i}-\${j}\`} className="text-white font-bold text-2xl mt-8">{paragraph.replace(/\\*\\*/g, '')}</h3>;
              }
              return <p key={\`\${i}-\${j}\`} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>').replace(/\`(.*?)\`/g, '<code class="bg-slate-800 text-indigo-300 px-1 py-0.5 rounded">$1</code>') }}></p>;
            });
          })}
        </div>
      </article>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-slate-900/50 rounded-3xl border border-slate-800/50 backdrop-blur-md">
        <div className="text-center md:text-left">
           <h4 className="text-white font-bold text-xl mb-2">Transmission Complete?</h4>
           <p className="text-slate-400">Mark this lesson as read to track your progress on the Star Map.</p>
        </div>

        <button
          onClick={handleMarkComplete}
          className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 w-full md:w-auto justify-center"
        >
          {nextLesson ? (
            <>
              Mark Complete & Continue
              <ArrowRight className="w-5 h-5" />
            </>
          ) : planet.project ? (
            <>
              Mark Complete & Start Mission
              <ArrowRight className="w-5 h-5" />
            </>
          ) : planet.quiz ? (
            <>
              Mark Complete & Take Quiz
              <ArrowRight className="w-5 h-5" />
            </>
          ) : (
            <>
              <CheckCircle className="w-5 h-5" />
              Complete System
            </>
          )}
        </button>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path, newContent.trim() + '\n');
console.log("Successfully updated page.tsx");
