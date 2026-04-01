title: "B.1 — Introduction to C++11 – Learn C++"
source: https://www.learncpp.com/cpp-tutorial/introduction-to-c11/
date: 2026-04-01 03:33
tags: 
description: 


[source](https://www.learncpp.com/cpp-tutorial/introduction-to-c11/)

# B.1 â€" Introduction to C++11

[*Alex*][1] November 25, 2011, 11:42 pm PST January 17, 2025

**What is C++11?**

On August 12, 2011, the [ISO (International Organization for Standardization)][2] approved a new version of C++, called C++11. C++11 adds a whole new set of features to the C++ language! Use of these new features is entirely optional -- but you will undoubtedly find some of them helpful. The prior tutorials have all been updated to be C++11 compliant.

**The goals and designs of C++11**

Bjarne Stroustrup characterized the goals of C++11 as such:

- Build on C++'s strengths -- rather than trying to extend C++ to new areas where it may be weaker (eg. Windows applications with heavy GUI), focus on making it do what it does well even better.
- Make C++ easier to learn, use, and teach -- provide functionality that makes the language more consistent and easier to use.

To that end, the committee that put the language together tried to obey the following general principles:

- Maintain stability and compatibility with older versions of C++ and C wherever possible. Programs that worked under C++03 should generally still work under C++11.
- Keep the number of core language extensions to a minimum, and put the bulk of the changes in the standard library (an objective that wasn't met very well with this release)
- Focus on improving abstraction mechanisms (classes, templates) rather than adding mechanisms to handle specific, narrow situations.
- Add new functionality for both novices and experts. A little of something for everybody!
- Increase type safety, to prevent inadvertent bugs.
- Improve performance and allow C++ to work directly with hardware.
- Consider usability and ecosystem issues. C++ needs to work well with other tools, be easy to use and teach, etc…

C++11 isn't a large departure from C++03 thematically, but it did add a huge amount of new functionality.

**Major new features in C++11**

For your interest, here's a list of the major features that C++11 adds. Note that this list is not comprehensive, but rather intended to highlight some of the key features of interest.

- auto ([10.8 -- Type deduction for objects using the auto keyword][3])
- char16_t and char32_t and new literals to support them (no tutorial yet)
- constexpr ([5.1 -- Constant variables (named constants)][4])
- decltype (mentioned in [16.7 -- Arrays, loops, and sign challenge solutions][5])
- default specifier ([14.11 -- Default constructors and default arguments][6])
- Delegating constructors ([14.12 -- Delegating constructors][7])
- delete specifier ([11.4 -- Deleting functions][8])
- Enum classes ([13.6 -- Scoped enumerations (enum classes)][9])
- Extern templates (no tutorial yet)
- Lambda expressions ([20.6 -- Introduction to lambdas (anonymous functions)][10]) and captures ([20.7 -- Lambda captures][11])
- long long int ([4.3 -- Object sizes and the sizeof operator][12])
- Move constructor and assignment ([22.3 -- Move constructors and move assignment][13])
- Noexcept specifier (quick mention in [27.4 -- Uncaught exceptions and catch-all handlers][14])
- nullptr ([12.8 -- Null pointers][15])
- override and final specifiers(

    25.3 -- The override and final specifiers, and covariant return types

    )

- Range-based for statements ([16.8 -- Range-based for loops (for-each)][16])
- r-value references ([22.2 -- R-value references][17])
- static_assert ([9.6 -- Assert and static_assert][18])
- std::initializer_list ([23.7 -- std::initializer_list][19])
- Trailing return type syntax ([10.8 -- Type deduction for objects using the auto keyword][3])
- Type aliases ([10.7 -- Typedefs and type aliases][20])
- typedef can now typedef template classes
- Uniform initialization ([4.1 -- Introduction to fundamental data types][21])
- User-defined literals (no tutorial yet)
- Variadic templates (no tutorial yet)
- Two \>\> symbols without a space between them will now properly be interpreted as closing a template object

There are also many new classes in the C++ standard library available for use.
- Better support for multi-threading and thread-local storage (no tutorial yet)
- Hash tables (no tutorial yet)
- Random number generation improvements (basic discussion in [8.14 -- Generating random numbers using Mersenne Twister][22])
- Reference wrappers ([25.9 -- Object slicing][23])
- Regular expressions (no tutorial yet)
- std::auto_ptr has been deprecated ([22.1 -- Introduction to smart pointers and move semantics][24])
- std::tuple (no tutorial yet)
- std::unique_ptr ([22.5 -- std::unique_ptr][25])

Next lesson

B.2Introduction to C++14

Back to table of contents

Previous lesson

A.4C++ FAQ

  [1]: https://www.learncpp.com/author/Alex/
  [2]: https://www.iso.org/home.html
  [3]: https://www.learncpp.com/cpp-tutorial/type-deduction-for-objects-using-the-auto-keyword/
  [4]: https://www.learncpp.com/cpp-tutorial/constant-variables-named-constants/
  [5]: https://www.learncpp.com/cpp-tutorial/arrays-loops-and-sign-challenge-solutions/
  [6]: https://www.learncpp.com/cpp-tutorial/default-constructors-and-default-arguments/
  [7]: https://www.learncpp.com/cpp-tutorial/delegating-constructors/
  [8]: https://www.learncpp.com/cpp-tutorial/deleting-functions/
  [9]: https://www.learncpp.com/cpp-tutorial/scoped-enumerations-enum-classes/
  [10]: https://www.learncpp.com/cpp-tutorial/introduction-to-lambdas-anonymous-functions/
  [11]: https://www.learncpp.com/cpp-tutorial/lambda-captures/
  [12]: https://www.learncpp.com/cpp-tutorial/object-sizes-and-the-sizeof-operator/
  [13]: https://www.learncpp.com/cpp-tutorial/move-constructors-and-move-assignment/
  [14]: https://www.learncpp.com/cpp-tutorial/uncaught-exceptions-catch-all-handlers/
  [15]: https://www.learncpp.com/cpp-tutorial/null-pointers/
  [16]: https://www.learncpp.com/cpp-tutorial/range-based-for-loops-for-each/
  [17]: https://www.learncpp.com/cpp-tutorial/rvalue-references/
  [18]: https://www.learncpp.com/cpp-tutorial/assert-and-static_assert/
  [19]: https://www.learncpp.com/cpp-tutorial/stdinitializer_list/
  [20]: https://www.learncpp.com/cpp-tutorial/typedefs-and-type-aliases/
  [21]: https://www.learncpp.com/cpp-tutorial/introduction-to-fundamental-data-types/
  [22]: https://www.learncpp.com/cpp-tutorial/generating-random-numbers-using-mersenne-twister/
  [23]: https://www.learncpp.com/cpp-tutorial/object-slicing/
  [24]: https://www.learncpp.com/cpp-tutorial/introduction-to-smart-pointers-move-semantics/
  [25]: https://www.learncpp.com/cpp-tutorial/stdunique_ptr/
  [26]: https://www.learncpp.com/cpp-tutorial/introduction-to-c14/
  [27]: https://www.learncpp.com/
  [28]: https://www.learncpp.com/cpp-tutorial/cpp-faq/

*Previous Post*[4.6 â€" Fixed-width integers and size_t][29]

  [29]: https://www.learncpp.com/cpp-tutorial/fixed-width-integers-and-size-t/

*Next Post*[Site migration][30]

  [30]: https://www.learncpp.com/site-news/site-migration/
