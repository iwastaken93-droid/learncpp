title: "B.5 — Introduction to C++23 – Learn C++"
source: https://www.learncpp.com/cpp-tutorial/introduction-to-c23/
date: 2026-04-01 03:33
tags: 
description: 


[source](https://www.learncpp.com/cpp-tutorial/introduction-to-c23/)

# B.5 â€" Introduction to C++23

[*Alex*][1] January 25, 2024, 1:33 pm PST January 17, 2025

What is C++23?

In February of 2023, the ISO (International Organization for Standardization) approved a new version of C++, called C++23.

New improvements in C++23

For your interest, here's a list of the major changes that C++23 adds. Note that this list is not comprehensive, but rather intended to highlight some of the key changes of interest.

- Constexpr \<cmath\> (e.g. `std::abs()`), and \<cstdlib\> ([6.7 -- Relational operators and floating point comparisons][2]).
- Constexpr `std::unique_ptr` (no lesson yet).
- Explicit `this` parameter (no lesson yet).
- Fixed-size floating point types (via \<stdfloat\>) (no lesson yet).
- Formatted printing functions `std::print` and `std::println` (no lesson yet)
- Literal suffixes for `std::size_t` and the corresponding signed type ([5.2 -- Literals][3]).
- Multidimensional subscript `operator[]` (Mentioned in lesson [17.13 -- Multidimensional std::array][4]).
- Multidimensional span `std::mdspan` ([17.13 -- Multidimensional std::array][4]).
- Preprocessor directives `#elifdef` and `#elifndef` (no lesson yet).
- Preprocessor directive `#warning `(no lesson yet).
- Stacktrace library (no lesson yet)
- Standard library modules `std` (and `std.compat`) (no lesson yet).
- Static `operator()` and `operator[]` (no lesson yet).
- `std::bitset` now fully constexpr.
- `std::expected` (no lesson yet)
- `std::ranges` algorithms `starts_with`, `ends_with`, `contains` (no lesson yet)
- `std::string::contains` and `std::string_view::contains` (no lesson yet)
- `std::to_underlying` to get the underlying type of enum ([13.6 -- Scoped enumerations (enum classes)][5]).
- `std::unreachable()` (no lesson yet).
- Using unknown pointers and references in constant expressions ([17.2 -- std::array length and indexing][6]).

Next lesson

C.1The end?

Back to table of contents

Previous lesson

B.4Introduction to C++20

  [1]: https://www.learncpp.com/author/Alex/
  [2]: https://www.learncpp.com/cpp-tutorial/relational-operators-and-floating-point-comparisons/
  [3]: https://www.learncpp.com/cpp-tutorial/literals/
  [4]: https://www.learncpp.com/cpp-tutorial/multidimensional-stdarray/
  [5]: https://www.learncpp.com/cpp-tutorial/scoped-enumerations-enum-classes/
  [6]: https://www.learncpp.com/cpp-tutorial/stdarray-length-and-indexing/
  [7]: https://www.learncpp.com/cpp-tutorial/appendix-c-the-end/
  [8]: https://www.learncpp.com/
  [9]: https://www.learncpp.com/cpp-tutorial/introduction-to-c20/

*Previous Post*

16.5 â€" Returning std::vector, and an introduction to move semantics

*Next Post*[12.15 â€" std::optional][10]

  [10]: https://www.learncpp.com/cpp-tutorial/stdoptional/
