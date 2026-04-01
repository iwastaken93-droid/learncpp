export type Lesson = {
  id: string;
  title: string;
  slug: string;
  content: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  instructions: string;
};

export type Quiz = {
  id: string;
  title: string;
  questions: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }[];
};

export type Planet = {
  id: string;
  name: string;
  description: string;
  color: string;
  slug: string;
  lessons: Lesson[];
  project?: Project;
  quiz?: Quiz;
};

export const curriculum: Planet[] = [
  {
    id: "p0",
    name: "System 0: The Launchpad",
    slug: "the-launchpad",
    description: "Welcome Cadet! Introduction to C++ and your spacecraft computer systems.",
    color: "from-blue-500 to-cyan-500",
    lessons: [
      {
        id: "l0_1",
        title: "0.1 - Welcome to the Academy",
        slug: "welcome-to-academy",
        content: "Welcome Cadet! You are about to embark on a journey to learn C++, one of the most powerful programming languages in the known universe. C++ powers the navigational computers of this very spacecraft, game engines, and planetary operating systems.\n\nUnlike basic flight simulators, this training program assumes you have no prior programming experience. We will teach you everything you need to know to command the stars. Remember: the universe rewards patience. Do not rush your training, and practice coding every day!"
      },
      {
        id: "l0_2",
        title: "0.2 - Starship Instructions (Programs & Languages)",
        slug: "programs-and-languages",
        content: "Modern starship computers are incredibly fast, but they have a fatal flaw: they are completely literal. They only do exactly what they are told.\n\nA **computer program** is a sequence of instructions that directs a computer to perform actions. We write these instructions using a **programming language** like C++.\n\nWhen the ship's computer follows these instructions, we say it is **executing** or **running** the program. The physical parts of the ship (the CPU core, memory banks, drives) are the **hardware**, while the programs we write are the **software**."
      },
      {
        id: "l0_3",
        title: "0.3 - The History of C++",
        slug: "history-of-cpp",
        content: "Before C++, there was C. Developed in 1972 on Ancient Earth by a pioneer named Dennis Ritchie, C was built to write operating systems. It was incredibly fast and efficient.\n\nIn 1979, another pioneer named Bjarne Stroustrup wanted to make C even better. He created C++ (pronounced 'see-plus-plus'), adding powerful new organizational features called 'Object-Oriented Programming'. Today, C++ is maintained by an intergalactic standards committee (ISO) to ensure that your code runs identically whether you are on Earth, Mars, or orbiting Alpha Centauri."
      },
      {
        id: "l0_4",
        title: "0.4 - The Development Life Support Cycle",
        slug: "cpp-development",
        content: "Before you touch the terminal, you must think! Building C++ software follows a specific cycle:\n\n1. **Define the Problem:** What are you trying to build? (e.g., 'Calculate the trajectory to the moon.')\n2. **Design a Solution:** How will you solve it? (Plan out the steps before you code!)\n3. **Write the Code:** Enter the C++ instructions into your editor.\n4. **Compile & Link:** Translate your human-readable C++ code into machine code that the ship's computer can understand.\n5. **Test & Debug:** Run the program and fix any anomalies or critical failures."
      },
      {
        id: "l0_5",
        title: "0.5 - The Compiler, Linker, and Libraries",
        slug: "compiler-linker",
        content: "You cannot simply speak C++ to the ship's computer. It only understands binary machine code (1s and 0s). \n\nTo bridge this gap, we use a tool called a **Compiler**. The C++ compiler takes your source code (saved in '.cpp' files) and translates it into an intermediate format called an **object file**.\n\nNext, the **Linker** takes over. It connects your object files together, along with any pre-packaged tools from **Libraries** (like the C++ Standard Library, which helps with math and text), and produces the final **Executable** file that actually runs!"
      }
    ],
    quiz: {
      id: "q0",
      title: "Flight Readiness Check: Chapter 0",
      questions: [
        {
          question: "What is the primary role of a C++ Compiler?",
          options: [
            "To physically build the hardware.",
            "To translate human-readable C++ code into machine code.",
            "To execute the final program on the ship's display.",
            "To format the text on the screen."
          ],
          correctAnswerIndex: 1,
          explanation: "The compiler acts as a universal translator, taking your C++ source code and converting it into machine instructions that the computer hardware can execute."
        },
        {
          question: "What connects multiple object files and libraries to create a final executable?",
          options: [
            "The Compiler",
            "The CPU",
            "The Linker",
            "The Debugger"
          ],
          correctAnswerIndex: 2,
          explanation: "The Linker is responsible for linking together compiled object files and external libraries into one cohesive executable program."
        }
      ]
    }
  }
];
