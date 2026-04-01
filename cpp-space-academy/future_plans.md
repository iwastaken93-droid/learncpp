# C++ Space Academy: Future Expansion Plan

This document outlines the roadmap for adapting the remaining LearnCPP.com tutorials (Chapters 1-28 and appendices) into the space-themed "Planets/Systems" format of the C++ Space Academy.

## The Paradigm
- **Chapters -> Systems/Planets:** Each major chapter from LearnCPP will become a new `Planet` object in `src/data/curriculum.ts`.
- **Lessons -> Flight Manuals:** Individual markdown files within a chapter will be condensed and rewritten into space-themed `Lesson` objects. The content must avoid simple copy-pasting, instead injecting academy-related analogies (e.g., memory as cargo holds, functions as thruster routines).
- **Projects & Quizzes:** At the end of each system, cadets will complete a space-themed coding project and a flight-readiness quiz.

## Proposed Curriculum Roadmap

### **System 1: The Basic Hull (C++ Basics)**
*Adapted from: Chapter 1 - C++ Basics*
- **Theme:** Constructing the basic frame of a spacecraft.
- **Lessons to adapt:**
  - Statements and structure (Building the frame)
  - Comments (Logbook entries)
  - Variables and Initialization (Cargo containers)
  - First look at `std::cout` and `std::cin` (Comm-link transmissions)
- **Project:** Create a simple communication program that greets the cadet by name and asks for their spacecraft's name.

### **System 2: Navigation Functions (Functions and Files)**
*Adapted from: Chapter 2 - C++ Basics: Functions and Files*
- **Theme:** Delegating tasks to automated ship subsystems.
- **Lessons to adapt:**
  - Introduction to functions (Automated routines)
  - Return values (Sensor readings)
  - Parameters and Arguments (Coordinates and inputs)
  - Local scope (Airlock containment)
  - Forward declarations & header files (Navigational blueprints)
- **Project:** Build a trajectory calculation function that takes coordinates as arguments and returns a simulated distance.

### **System 3: Diagnostic Debugging (Debugging C++ Programs)**
*Adapted from: Chapter 3 - Debugging C++ Programs*
- **Theme:** Finding and fixing critical anomalies in the ship's systems.
- **Lessons to adapt:**
  - Syntax vs Semantic errors (Hull breaches vs Navigational errors)
  - Using the debugger, stepping, breakpoints (Running diagnostic sweeps)
- **Project:** A "broken" hyperdrive module is provided. Cadets must find and fix the logical errors.

### **System 4: The Databanks (Fundamental Data Types)**
*Adapted from: Chapter 4 - Fundamental Data Types*
- **Theme:** Different types of resources and fuels used on the ship.
- **Lessons to adapt:**
  - Integers, Floats, Booleans (Fuel cells, shield frequencies, power toggles)
  - `char` and strings (Encrypted transmissions)
  - `const` and `constexpr` (Immutable laws of physics)

### **System 5: The Reactor Core (Operators)**
*Adapted from: Chapter 5 - Operators*
- **Theme:** Manipulating energy and power flows.
- **Lessons to adapt:**
  - Arithmetic and Assignment (Power routing)
  - Relational and Logical Operators (System conditional checks)

### **System 6: Navigational Logic (Control Flow)**
*Adapted from: Chapter 8 - Control Flow*
- **Theme:** Plotting a course through asteroid fields.
- **Lessons to adapt:**
  - `if`/`else` statements (Evasive maneuvers)
  - `switch` statements (Sector routing)
  - `for` and `while` loops (Orbiting and repetitive scanning)

### **System 7: Advanced Cargo Management (Arrays, Pointers, and References)**
*Adapted from: Chapters 12, 16, 17 - Compound Types*
- **Theme:** Managing the cargo bay manifests and memory addresses of specific supplies.
- **Lessons to adapt:**
  - `std::vector` and Arrays (Cargo manifests)
  - Pointers and Memory Addresses (Navigating physical storage coordinates)
  - References (Direct communication links)

### **System 8: Object-Oriented Ship Design (Classes and Objects)**
*Adapted from: Chapters 14, 15 - Classes*
- **Theme:** Designing blueprints for entire fleets of ships.
- **Lessons to adapt:**
  - Classes and objects (Ship blueprints vs actual built ships)
  - Public/Private access (Classified vs Unclassified systems)
  - Constructors (Ship assembly process)

## Future Expansion (Advanced Systems)
- **System 9:** Advanced Subsystem Interactions (Operator Overloading - Chapter 21)
- **System 10:** Quantum Inheritance (Object Relationships and Inheritance - Chapter 23, 24)
- **System 11:** Universal Templates (Templates - Chapter 26)
- **System 12:** Warp Drive Anomalies (Exceptions - Chapter 27)

## Implementation Steps for Future Maintainers
1. Read the corresponding LearnCPP chapter markdown files in the `try/LearnCPP_Lessons/` directory.
2. Abstract the core concept (e.g., what is a pointer?).
3. Create a space analogy (e.g., a pointer is a coordinate to a specific cargo bay, not the cargo itself).
4. Write 3-5 concise, engaging lessons under a new `Planet` object in `src/data/curriculum.ts`.
5. Write a small interactive project and a 3-5 question quiz.
