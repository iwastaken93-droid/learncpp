import { User, Medal, Trophy, Star, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // In a real app, this would be fetched from the database based on the logged-in user
  const user = {
    name: "Jules Cadet",
    cadetRank: "Space Explorer",
    points: 1250,
    completedPlanets: 2,
    totalPlanets: 15,
    badges: [
      { id: "b1", name: "Launchpad Cleared", icon: <Rocket className="w-8 h-8 text-indigo-400" /> },
      { id: "b2", name: "Variable Voyager", icon: <Star className="w-8 h-8 text-yellow-400" /> },
    ]
  };

  const progressPercentage = (user.completedPlanets / user.totalPlanets) * 100;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-white flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
              <User className="w-8 h-8 text-indigo-400" />
            </div>
            {user.name}
          </h1>
          <p className="text-slate-400 text-lg mt-2 flex items-center gap-2">
            <Medal className="w-5 h-5 text-yellow-500" />
            Rank: <span className="font-bold text-white">{user.cadetRank}</span>
          </p>
        </div>

        <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-md flex items-center gap-8 min-w-[300px]">
          <div>
            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">Total Score</p>
            <p className="text-4xl font-black text-white flex items-center gap-2">
              <Zap className="w-8 h-8 text-yellow-400" />
              {user.points}
            </p>
          </div>
          <div className="h-16 w-px bg-slate-800"></div>
          <div>
            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">Galaxy Progress</p>
            <p className="text-2xl font-bold text-white flex items-baseline gap-1">
              {user.completedPlanets} <span className="text-slate-500 text-lg font-medium">/ {user.totalPlanets} Systems</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Card */}
        <div className="lg:col-span-2 bg-slate-900/60 p-8 rounded-3xl border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.05)] backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Target className="w-6 h-6 text-indigo-400" />
              Current Mission
            </h2>
            <Link
              href="/academy"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              View Star Map →
            </Link>
          </div>

          <div className="mb-10">
            <div className="flex justify-between text-sm font-medium mb-3">
              <span className="text-slate-400">Completion</span>
              <span className="text-indigo-400">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-4 shadow-inner overflow-hidden border border-slate-700">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
            <h3 className="font-bold text-white mb-2">Next Stop: The Function Galaxy</h3>
            <p className="text-slate-400 mb-4">Master functions, return values, parameters, and multiple files to earn your next badge.</p>
            <Link
              href="/academy/function-galaxy/lesson/intro-functions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              Resume Mission
            </Link>
          </div>
        </div>

        {/* Badges Card */}
        <div className="bg-slate-900/60 p-8 rounded-3xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.05)] backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-purple-400" />
            Earned Badges
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {user.badges.map(badge => (
              <div key={badge.id} className="flex flex-col items-center justify-center p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-colors text-center gap-4 group">
                <div className="p-4 bg-slate-900 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-shadow">
                  {badge.icon}
                </div>
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                  {badge.name}
                </span>
              </div>
            ))}

            {/* Empty slots for unearned badges */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={`empty-${i}`} className="flex flex-col items-center justify-center p-6 bg-slate-950/30 rounded-2xl border border-slate-800 border-dashed text-center gap-4 opacity-50">
                <div className="p-4 bg-slate-900 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-slate-800" />
                </div>
                <span className="text-sm font-bold text-slate-600">Locked</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary import fix for the mocked data
function Rocket(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.82-13.82c.4-.55.9-.68 1.48-.48 2.05.7 4.19 1.62 6.13 2.9.46.3.56.88.24 1.28A22 22 0 0 1 15 12z"/><path d="m15 12 3 3a22 22 0 0 1-13.82 3.82c-.55.4-.68.9-.48 1.48.7 2.05 1.62 4.19 2.9 6.13.3.46.88.56 1.28.24A22 22 0 0 1 12 15z"/><path d="m9 9 6 6"/><path d="M10 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>;
}
