"use client";

import Link from "next/link";
import { curriculum } from "@/data/curriculum";
import { CheckCircle2, ChevronRight, Lock, MapPin, Target } from "lucide-react";
import { useState, useEffect } from "react";

export default function AcademyPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedProjects, setCompletedProjects] = useState<string[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

  useEffect(() => {
    // Load progress from local storage
    const storedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    const storedProjects = JSON.parse(localStorage.getItem('completedProjects') || '[]');
    const storedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');

    setCompletedLessons(storedLessons);
    setCompletedProjects(storedProjects);
    setCompletedQuizzes(storedQuizzes);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16 text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">The Star Map</h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Chart your course across the galaxy. Complete planets in order to master C++ and earn your badges.
        </p>
      </div>

      <div className="relative py-12 before:absolute before:inset-0 before:left-[4rem] md:before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-slate-800 before:z-0 space-y-24">
        {curriculum.map((planet, index) => {
          const isFirstPlanet = index === 0;
          let prevPlanetComplete = true;

          if (!isFirstPlanet) {
             const prevPlanet = curriculum[index - 1];
             if (prevPlanet.quiz) {
                prevPlanetComplete = completedQuizzes.includes(prevPlanet.quiz.id);
             } else if (prevPlanet.project) {
                prevPlanetComplete = completedProjects.includes(prevPlanet.project.id);
             }
          }

          const isLocked = !isFirstPlanet && !prevPlanetComplete;
          const isEven = index % 2 === 0;

          return (
            <div key={planet.id} className={`relative flex flex-col md:flex-row items-center w-full group ${isLocked ? 'opacity-50' : ''}`}>

              {/* Timeline Marker */}
              <div className="absolute left-[4rem] md:left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-[8px] border-slate-950 bg-slate-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-xl shadow-inner ${isLocked ? 'bg-slate-700' : 'bg-gradient-to-br ' + planet.color}`}>
                  {isLocked ? <Lock className="w-5 h-5 text-slate-400" /> : index}
                </div>
              </div>

              {/* Path connector line (desktop) */}
              <div className={`hidden md:block absolute top-1/2 w-[calc(50%-4rem)] h-1 bg-gradient-to-r from-transparent to-slate-800 z-10 ${isEven ? 'right-[50%] bg-gradient-to-l' : 'left-[50%]'}`} />

              {/* Planet Card Container */}
              <div className={`w-[calc(100%-8rem)] ml-[8rem] md:w-[calc(50%-5rem)] md:ml-0 ${isEven ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>

                <div className={`p-8 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-slate-800 transition-all shadow-2xl relative overflow-hidden ${isLocked ? '' : 'hover:border-indigo-500/50'}`}>

                  {!isLocked && (
                    <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] bg-gradient-to-br ${planet.color} opacity-10 pointer-events-none rounded-full`} />
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-black text-white mb-2 tracking-tight">{planet.name}</h2>
                      <p className="text-slate-400 text-lg leading-relaxed">{planet.description}</p>
                    </div>
                  </div>

                  <div className={`space-y-3 mt-8 ${isLocked ? 'pointer-events-none' : ''}`}>
                    {planet.lessons.map((lesson) => {
                      const isComplete = completedLessons.includes(lesson.id);
                      return (
                        <Link
                          key={lesson.id}
                          href={`/academy/${planet.slug}/lesson/${lesson.slug}`}
                          className={`flex items-center justify-between p-4 rounded-xl transition-all group/lesson border ${isComplete ? 'bg-indigo-900/20 border-indigo-500/30' : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50'}`}
                        >
                          <div className="flex items-center gap-3">
                            {isComplete ? (
                              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-slate-600 shrink-0" />
                            )}
                            <span className={`font-medium transition-colors ${isComplete ? 'text-indigo-200' : 'text-slate-300 group-hover/lesson:text-white'}`}>
                              {lesson.title}
                            </span>
                          </div>
                          <ChevronRight className={`w-5 h-5 shrink-0 transition-colors ${isComplete ? 'text-indigo-400' : 'text-slate-600 group-hover/lesson:text-white'}`} />
                        </Link>
                      )
                    })}

                    {planet.project && (
                      <Link
                        href={`/academy/${planet.slug}/project/${planet.project.slug}`}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all group/project mt-6 ${completedProjects.includes(planet.project.id) ? 'bg-green-900/20 border-green-500/30' : 'bg-indigo-900/30 border-indigo-500/30 hover:bg-indigo-900/50 hover:border-indigo-500/60'}`}
                      >
                        <div className="flex items-center gap-3">
                          {completedProjects.includes(planet.project.id) ? (
                            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                          ) : (
                            <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                          )}
                          <span className={`font-bold transition-colors ${completedProjects.includes(planet.project.id) ? 'text-green-300' : 'text-indigo-300 group-hover/project:text-indigo-200'}`}>
                            Mission: {planet.project.title}
                          </span>
                        </div>
                        <ChevronRight className={`w-5 h-5 shrink-0 transition-colors ${completedProjects.includes(planet.project.id) ? 'text-green-400' : 'text-indigo-400 group-hover/project:text-indigo-300'}`} />
                      </Link>
                    )}

                    {planet.quiz && (
                      <Link
                        href={`/academy/${planet.slug}/quiz`}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all group/quiz mt-4 ${completedQuizzes.includes(planet.quiz.id) ? 'bg-purple-900/20 border-purple-500/30' : 'bg-purple-900/20 border-purple-500/30 hover:bg-purple-900/40 hover:border-purple-500/50'}`}
                      >
                        <div className="flex items-center gap-3">
                           {completedQuizzes.includes(planet.quiz.id) ? (
                            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                          ) : (
                            <Target className="w-5 h-5 text-purple-400 shrink-0" />
                          )}
                          <span className={`font-bold transition-colors ${completedQuizzes.includes(planet.quiz.id) ? 'text-purple-300' : 'text-purple-300 group-hover/quiz:text-purple-200'}`}>
                            Knowledge Check: {planet.quiz.title}
                          </span>
                        </div>
                        <ChevronRight className={`w-5 h-5 shrink-0 transition-colors ${completedQuizzes.includes(planet.quiz.id) ? 'text-purple-400' : 'text-purple-400 group-hover/quiz:text-purple-300'}`} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
