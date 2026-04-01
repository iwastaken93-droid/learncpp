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
        content: "Welcome Cadet! You are about to embark on a journey to learn C++, one of the most powerful programming languages in the known universe. C++ powers the navigational computers of this very spacecraft, high-performance game engines, and planetary operating systems.\n\nUnlike basic flight simulators, this training program assumes you have no prior programming experience. We will teach you everything you need to know to command the stars.\n\n**Your Flight Directives:**\n- **Type everything by hand:** Do not just copy and paste code from the manuals. Typing it yourself builds muscle memory and helps you understand error codes when the ship's computer complains.\n- **Experiment:** Change numbers. Break things. See what happens when you feed the wrong coordinates to the engine. You will learn more by breaking the ship in the simulator than by just reading the manual.\n- **Have Fun:** Exploring the universe through code should be enjoyable. If you get frustrated, dock your ship, get some rest, and return tomorrow."
      },
      {
        id: "l0_2",
        title: "0.2 - Starship Hardware & Instructions",
        slug: "hardware-instructions",
        content: "Modern starship computers are incredibly fast, but they have a fatal flaw: they only natively understand a limited set of instructions (machine code), and must be told *exactly* what to do.\n\nA **computer program** is a sequence of instructions that directs the ship's computer to perform actions. We write these instructions using a **programming language**.\n\nWhen the ship's computer follows these instructions, we say it is **executing** or **running** the program.\n\n**The Ship's Components (Hardware):**\n- **CPU (Central Processing Unit):** The brain of the ship that actually executes your commands.\n- **Memory (RAM):** Where your programs are loaded *before* they are executed. If the ship loses power, this memory is wiped!\n- **Storage (Drives):** Where your programs are permanently saved, even when the ship is powered down.\n- **Interactive Devices:** Your console, keyboard, and monitors used to interact with the ship."
      },
      {
        id: "l0_3",
        title: "0.3 - Interpreters vs Compilers",
        slug: "interpreters-vs-compilers",
        content: "Machine code (Assembly) is too difficult for humans to write efficiently. To solve this, we invented high-level languages like C++. However, the ship's CPU still only understands machine code.\n\nTo bridge this gap, we must translate our high-level C++ code. This is done in one of two ways:\n\n**1. Interpreters:**\nAn interpreter is a program that reads your code and translates/executes it line-by-line *while* the program is running. It's flexible, but slow, because the translation happens every single time you run the code. (Used by languages like Python or JavaScript).\n\n**2. Compilers (The C++ Way):**\nA compiler is a program that reads your *entire* C++ source code and translates it all at once into a standalone executable file (machine code). When you run the executable, it is incredibly fast because all the translation was done ahead of time. C++ relies on compilers for its blistering speed!"
      },
      {
        id: "l0_4",
        title: "0.4 - The History & Philosophy of C++",
        slug: "history-and-philosophy",
        content: "Before C++, there was C. Developed in 1972 by Dennis Ritchie, C was built to write operating systems. It was incredibly fast, efficient, and highly portable across different hardware platforms.\n\nIn 1979, Bjarne Stroustrup wanted to make C even better. He created C++ (pronounced 'see-plus-plus'), adding powerful new organizational features called 'Object-Oriented Programming'.\n\nSince then, the language has been standardized by the ISO committee. We have major language updates (like C++11, C++14, C++17, and C++20) that ensure your code runs exactly the same whether you are on Earth, Mars, or orbiting Alpha Centauri.\n\n**The Core Philosophy: Trust the Programmer**\nC++ is designed to give you ultimate freedom and blistering performance. However, this means the language *will not stop you* from doing something dangerous. If you tell C++ to vent the oxygen from the ship, it will do it without double-checking. Therefore, knowing what *not* to do is just as important as knowing what to do!"
      },
      {
        id: "l0_5",
        title: "0.5 - The Compiler, Linker, and Libraries",
        slug: "compiler-linker",
        content: "Let's look closer at the compilation process. It's a multi-step sequence:\n\n**Step 1: The Compiler**\nThe C++ compiler takes your source code (saved in `.cpp` files) and translates it into an intermediate format called an **object file** (usually ending in `.o` or `.obj`). It also checks your code for syntax errors. If you broke the rules of C++, it aborts the process and yells at you!\n\n**Step 2: The Linker**\nObject files cannot run on their own. The **Linker** takes over. It connects your object files together, along with any pre-packaged tools from **Libraries** (like the C++ Standard Library, which helps with math and text). The Linker binds them all together to produce the final **Executable** file that actually runs!"
      }
    ],
    quiz: {
      id: "q0",
      title: "Flight Readiness Check: Chapter 0",
      questions: [
        {
          question: "What is the primary difference between an Interpreter and a Compiler?",
          options: [
            "Interpreters translate code ahead of time, Compilers translate code while running.",
            "Compilers translate code ahead of time into a fast executable, Interpreters translate code line-by-line while running.",
            "Compilers are used for hardware, Interpreters are used for software.",
            "There is no difference, they are just different names for the same ship system."
          ],
          correctAnswerIndex: 1,
          explanation: "Compilers translate your entire source code into machine code ahead of time, resulting in a much faster executable program. Interpreters translate the code on-the-fly every time it runs."
        },
        {
          question: "What is the core philosophy of C++?",
          options: [
            "Safety first: prevent the programmer from making any mistakes.",
            "Trust the programmer: give them ultimate freedom and performance, even if it allows dangerous mistakes.",
            "Portability over Performance: always sacrifice speed to run on more hardware.",
            "Simplicity: keep the language as small as possible."
          ],
          correctAnswerIndex: 1,
          explanation: "C++ operates on the philosophy of 'Trust the programmer'. It provides maximum performance and control, but relies on you to know what you are doing to avoid critical failures."
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
