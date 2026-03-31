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
    description: "Introduction to C++ and setting up your local environment.",
    color: "from-blue-500 to-cyan-500",
    lessons: [
      {
        id: "l0_1",
        title: "Introduction to C/C++",
        slug: "intro-to-cpp",
        content: `C++ is one of the most popular and powerful programming languages in the universe. It powers game engines, operating systems, and spacecraft!

In this academy, you will learn modern C++ and compile it right on your own computer.

**Why C++?**
1. **Performance:** It's incredibly fast.
2. **Control:** You have direct access to memory and system resources.
3. **Versatility:** Used everywhere from microcontrollers to AAA games.`,
      },
      {
        id: "l0_2",
        title: "Installing a Compiler",
        slug: "installing-compiler",
        content: `Before you write code, you need a compiler to translate your C++ into machine code your computer understands.

**For Windows:**
Install **Visual Studio Community** (make sure to select "Desktop development with C++"). Alternatively, use **MinGW-w64** if you prefer the command line.

**For macOS:**
Open Terminal and run: \`xcode-select --install\` to install Clang.

**For Linux:**
Open your terminal and run: \`sudo apt update && sudo apt install build-essential\``,
      },
      {
        id: "l0_3",
        title: "Compiling Your First Program",
        slug: "first-program",
        content: `Let's write the classic "Hello, World!" program.

Open a text editor, create a file named \`main.cpp\`, and paste this:

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, Space Cadet!\\n";
    return 0;
}
\`\`\`

**To compile it via command line (macOS/Linux):**
\`g++ main.cpp -o hello\`

**To run it:**
\`./hello\``,
      }
    ],
    project: {
      id: "proj0",
      title: "Hello, Universe!",
      slug: "hello-universe",
      description: "Write and compile your very first C++ program locally.",
      instructions: "1. Install your compiler.\n2. Create a file named `mission1.cpp`.\n3. Write a program that prints your cadet name and your favorite planet.\n4. Compile and run it in your terminal.\n5. Click 'Mark as Complete' when you see the output!"
    },
    quiz: {
      id: "q0",
      title: "Launchpad Systems Check",
      questions: [
        {
          question: "What is the primary job of a C++ compiler?",
          options: [
            "To write code for you.",
            "To translate C++ code into machine-readable instructions.",
            "To make your computer run faster.",
            "To format your code beautifully."
          ],
          correctAnswerIndex: 1,
          explanation: "A compiler translates human-readable source code into machine code that the processor can execute."
        },
        {
          question: "Which file extension is standard for C++ source files?",
          options: [".c", ".html", ".cpp", ".py"],
          correctAnswerIndex: 2,
          explanation: ".cpp stands for C Plus Plus and is the standard extension."
        }
      ]
    }
  },
  {
    id: "p1",
    name: "Planet Variable",
    slug: "planet-variable",
    description: "Learn about statements, variables, and basic input/output.",
    color: "from-green-500 to-emerald-500",
    lessons: [
      {
        id: "l1_1",
        title: "Statements and Structure",
        slug: "statements",
        content: "A computer program is a sequence of instructions. In C++, these instructions are called **statements**. Every statement ends with a semicolon (`;`).\n\nThe `main()` function is the starting point of every C++ program."
      },
      {
        id: "l1_2",
        title: "Variables and Initialization",
        slug: "variables",
        content: "A **variable** is a named piece of memory used to store data. In C++, you must declare a variable's type before using it.\n\n```cpp\nint age = 42; // An integer initialized to 42\ndouble warp_speed = 9.9; // A decimal number\n```"
      },
      {
        id: "l1_3",
        title: "Input and Output (iostream)",
        slug: "iostream",
        content: "To talk to the user, we use the `<iostream>` library.\n- `std::cout` prints output.\n- `std::cin` gets input.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int x;\n    std::cout << \"Enter a number: \";\n    std::cin >> x;\n    std::cout << \"You entered \" << x << \"\\n\";\n    return 0;\n}\n```"
      }
    ],
    project: {
      id: "proj1",
      title: "The Cargo Manifest",
      slug: "cargo-manifest",
      description: "Build a program to calculate cargo weight.",
      instructions: "1. Create `cargo.cpp`.\n2. Ask the user for the number of supply crates.\n3. Ask for the weight of a single crate.\n4. Calculate and print the total weight.\n5. Compile and run it!"
    },
    quiz: {
      id: "q1",
      title: "Variable Verification",
      questions: [
        {
          question: "What symbol must end almost every statement in C++?",
          options: [".", ":", ";", "}"],
          correctAnswerIndex: 2,
          explanation: "Statements in C++ must be terminated with a semicolon (;)."
        },
        {
          question: "Which object is used to receive input from the keyboard?",
          options: ["std::cout", "std::input", "std::cin", "std::get"],
          correctAnswerIndex: 2,
          explanation: "std::cin (character input) is used to read data from the standard input stream."
        }
      ]
    }
  },
  {
    id: "p2",
    name: "The Function Galaxy",
    slug: "function-galaxy",
    description: "Master functions, return values, parameters, and multiple files.",
    color: "from-purple-500 to-pink-500",
    lessons: [
      {
        id: "l2_1",
        title: "Introduction to Functions",
        slug: "intro-functions",
        content: "A **function** is a reusable sequence of statements designed to do a specific job. You've already used `main()`. You can write your own!\n\n```cpp\nvoid sayHello() {\n    std::cout << \"Hello!\\n\";\n}\n```"
      },
      {
        id: "l2_2",
        title: "Parameters and Arguments",
        slug: "parameters",
        content: "Functions can take input variables called **parameters**.\n\n```cpp\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    std::cout << add(5, 3); // Prints 8\n    return 0;\n}\n```"
      }
    ]
  }
];
