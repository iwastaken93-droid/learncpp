"use client";

import { useState } from "react";
import { notFound, useRouter, useParams } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import Link from "next/link";
import { ChevronLeft, ChevronRight, HelpCircle, Target, Award } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const planetSlug = params?.planetSlug as string;

  const planet = curriculum.find((p) => p.slug === planetSlug);
  if (!planet || !planet.quiz) {
    return notFound();
  }

  const quiz = planet.quiz;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleSelectAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    if (selectedAnswer === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleFinishQuiz = () => {
    const completed = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
    if (!completed.includes(quiz.id)) {
      completed.push(quiz.id);
      localStorage.setItem('completedQuizzes', JSON.stringify(completed));
    }
    router.push('/academy');
  };

  if (isFinished) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="bg-slate-900/80 p-16 rounded-[2.5rem] border border-purple-500/30 shadow-[0_0_80px_rgba(168,85,247,0.15)] backdrop-blur-xl relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="p-8 bg-purple-500/20 rounded-full border-2 border-purple-500/40 mb-10 shadow-[0_0_60px_rgba(168,85,247,0.5)] text-purple-400">
            <Award className="w-24 h-24" />
          </div>

          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 tracking-tight">System Cleared!</h1>

          <p className="text-3xl text-slate-300 mb-12 font-medium">
            You scored <span className="text-white font-bold">{score}</span> out of <span className="text-white font-bold">{quiz.questions.length}</span>.
          </p>

          <button
            onClick={handleFinishQuiz}
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 text-xl w-full sm:w-auto"
          >
            Claim Badge & Return to Map
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href={`/academy/${planet.slug}/project/${planet.project?.slug || ''}`}
        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Mission
      </Link>

      <div className="bg-slate-900/80 p-10 rounded-3xl border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500/20 rounded-2xl border border-purple-500/30 text-purple-400">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">{quiz.title}</h1>
              <p className="text-purple-400 font-bold tracking-widest uppercase text-sm mt-1">
                Knowledge Check • {planet.name}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-1">Question</span>
            <span className="text-2xl font-black text-white">{currentQuestionIndex + 1} <span className="text-slate-500 text-lg">/ {quiz.questions.length}</span></span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
          {currentQuestion.question}
        </h3>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            let btnClass = "w-full text-left p-6 rounded-2xl border-2 transition-all font-medium text-lg flex items-center justify-between ";

            if (showExplanation) {
              if (index === currentQuestion.correctAnswerIndex) {
                btnClass += "bg-green-500/20 border-green-500 text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.2)]";
              } else if (index === selectedAnswer) {
                btnClass += "bg-red-500/20 border-red-500 text-red-300";
              } else {
                btnClass += "bg-slate-800 border-slate-700 text-slate-400 opacity-50";
              }
            } else {
              if (selectedAnswer === index) {
                btnClass += "bg-purple-600 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]";
              } else {
                btnClass += "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-600";
              }
            }

            return (
              <button
                key={index}
                disabled={showExplanation}
                onClick={() => handleSelectAnswer(index)}
                className={btnClass}
              >
                {option}
                {showExplanation && index === currentQuestion.correctAnswerIndex && (
                  <Target className="w-6 h-6 text-green-400" />
                )}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              Explanation
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        <div className="mt-10 flex justify-end">
          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className={`px-8 py-4 font-bold rounded-xl transition-all text-lg ${
                selectedAnswer === null
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="group flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] text-lg"
            >
              {currentQuestionIndex < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
