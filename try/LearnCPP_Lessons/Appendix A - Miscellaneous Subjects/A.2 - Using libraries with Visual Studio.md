title: "A.2 — Using libraries with Visual Studio – Learn C++"
source: https://www.learncpp.com/cpp-tutorial/a2-using-libraries-with-visual-studio-2005-express/
date: 2026-04-01 03:33
tags: 
description: 


[source](https://www.learncpp.com/cpp-tutorial/a2-using-libraries-with-visual-studio-2005-express/)

# A.2 â€" Using libraries with Visual Studio

[*Alex*][1] June 30, 2007, 10:01 am PDT August 22, 2024

To recap the process needed to use a library:

Once per library:

1.  Acquire the library. Download it from the website or via a package manager.
2.  Install the library. Unzip it to a directory or install it via a package manager.

Once per project:

1.  Tell the compiler where to look for the header file(s) for the library.
2.  Tell the linker where to look for the precompiled library file(s) for the library (if there are any).
3.  Tell the linker which static or import precompiled library files to link (if there are any).
4.  \#include the library's header file(s) in your program.
5.  Make sure the program know where to find any dynamic libraries being used.

**Steps 1 and 2 -- Acquire and install library**

Download and install the library to your hard disk. See the tutorial on [static and dynamic libraries][2] for more information about this step.

**Steps 3 and 4 -- Tell the compiler where to find headers and library files**

A\) Go to the Project menu and pick Project -\> Properties (it should be at the bottom)

B\) Under the "Configuration� dropdown, make sure that "All configurations� is selected.

C\) In the left window pane, select "Configuration Properties� -\> "VC++ Directories�.

D\) On the "Include Directories� line, add the path to the .h files for the library (make sure this is separated from previous entries by a semicolon).

E\) On the "Library Directories�, add the path to the library (.lib) files for the library (if there are any).

F\) Click "OK�.

**Step 5 -- Tell the linker which libraries your program is using**

For step 5, we need to add the library (.lib) files from the library to our project (if there are any -- if not, you can skip this step). We do this on an individual project basis.

A\) Go to the Project menu and pick Project -\> Properties (it should be at the bottom)

B\) Under the "Configuration� dropdown, make sure that "All configurations� is selected.

C\) In the left window pane, select "Configuration Properties� -\> "Linker� -\> "Input�.

D\) Add the name of your .lib file to the list of "Additional Dependencies� (separated from previous entries by a semicolon)

E\) Click "OK�.

**Steps 6 and 7 -- \#include header files and make sure project can find DLLs**

Simply \#include the header file(s) from the library in your project as per usual.

See the tutorial [A1 -- Static and dynamic libraries][2] for more information on step 7.

The vcpkg package manager

vcpkg is a Microsoft-developed package manager that makes it easier to download, install, manage, and use C++ libraries. It integrates with Visual Studio. See [this page][3] for more information on how to install and use vcpkg.

Next lesson

A.3Using libraries with Code::Blocks

Back to table of contents

Previous lesson

A.1Static and dynamic libraries

  [1]: https://www.learncpp.com/author/Alex/
  [2]: https://www.learncpp.com/cpp-tutorial/a1-static-and-dynamic-libraries/
  [3]: https://learn.microsoft.com/en-us/vcpkg/get_started/get-started-msbuild?pivots=shell-cmd
  [4]: https://www.learncpp.com/cpp-tutorial/a3-using-libraries-with-codeblocks/
  [5]: https://www.learncpp.com/
