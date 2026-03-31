import Link from "next/link";
import { Rocket, Shield, BookOpen, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[calc(100vh-6rem)]">
      {/* Hero Section */}
      <div className="text-center max-w-3xl space-y-8 z-10 mt-12">
        <div className="inline-block p-4 bg-indigo-500/20 rounded-2xl border border-indigo-500/30 mb-4 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
          <Rocket className="w-16 h-16 text-indigo-400" />
        </div>
        <h1 className="text-7xl font-extrabold tracking-tight bg-gradient-to-br from-indigo-300 via-white to-purple-400 text-transparent bg-clip-text pb-2">
          C++ Space Academy
        </h1>
        <p className="text-2xl text-slate-300 leading-relaxed">
          Embark on an epic journey across the galaxy to master C++.
          From "Planet Variable" to the depths of "Pointer Black Hole",
          your mission awaits, Cadet!
        </p>

        <div className="flex items-center justify-center gap-6 pt-10">
          <Link
            href="/academy"
            className="group relative px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full overflow-hidden transition-all shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_rgba(99,102,241,0.8)] hover:scale-105 text-lg"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            <span className="relative flex items-center gap-3">
              Launch Mission
              <Rocket className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-5xl w-full z-10">
        <FeatureCard
          icon={<BookOpen className="w-10 h-10 text-blue-400" />}
          title="Interactive Curriculum"
          description="Learn C++ chapter by chapter. Bite-sized lessons, inspired by the legendary LearnCpp.com."
        />
        <FeatureCard
          icon={<Shield className="w-10 h-10 text-purple-400" />}
          title="Local Projects"
          description="Write real code on your own machine. We guide you through compiling and running it."
        />
        <FeatureCard
          icon={<Star className="w-10 h-10 text-yellow-400" />}
          title="Earn Badges"
          description="Level up your Cadet Rank and collect badges for every planetary system you conquer."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-md p-10 rounded-3xl border border-slate-800/80 hover:border-indigo-500/50 transition-colors flex flex-col items-center text-center space-y-6">
      <div className="p-5 bg-slate-800 rounded-2xl shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-lg">{description}</p>
    </div>
  );
}
