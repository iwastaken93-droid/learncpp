# Learn C++ Offline Tutorial Library

This repository contains a complete, organized, and offline-ready collection of C++ tutorials extracted from [LearnCpp.com](https://www.learncpp.com).

## 📂 Project Structure

The lessons are organized into the following structure within the `LearnCPP_Lessons/` directory:

- **Chapters 0 - 28**: Comprehensive lessons covering everything from "Getting Started" to "Input/Output (IO)".
- **Chapter O**: Optional chapter on Bit Manipulation.
- **Chapter F**: Focused chapter on `constexpr` functions.
- **Appendices A - D**: Miscellaneous subjects, C++ updates, and deprecated articles.

Each folder corresponds to a chapter, and each lesson is saved as a dedicated `.md` (Markdown) file for easy reading and searching.

## 🛠️ How it was Created

This library was autonomously generated using the following process:
1. **Extraction**: Parsed the Learn C++ index to map out every chapter and lesson link.
2. **Conversion**: Used the **Heck Yes Markdown API** to convert the web tutorials into clean, readable Markdown format.
3. **Refinement**: Applied the `ftfy` (fixes text for you) library to repair common encoding artifacts (mojibake) such as `Ã¢â¬â¢` and `Ã¢â¬"`, ensuring the text is perfectly readable.
4. **Organization**: Automatically created a nested directory structure to mirror the original site's curriculum.

## 📜 Master Index
For a quick overview of all available lessons and their original source links, see the [lesson_links.md](./lesson_links.md) file in the root directory.

---
*Note: This content is provided for educational purposes. All original content and intellectual property belong to [LearnCpp.com](https://www.learncpp.com).*
