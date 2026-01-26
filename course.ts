import type { CourseManifest, CourseId } from "../../src/types/data";

/**
 * "Introduction to Python" course manifest.
 * Contains course metadata and unit ordering.
 */
const courseManifest: CourseManifest = {
  id: "intro-python" as CourseId,
  title: "Introduction to Python",
  blurb:
    "Learn Python programming from scratch with interactive lessons and exercises.",
  longDescription: `A comprehensive introduction to Python programming for people without any programming experience. Through hands-on practice, you'll build a strong foundation in programming fundamentals while creating visual programs with turtle graphics.

#### By the End of This Course You Will...
- Write and run Python code confidently
- Use variables to store and manipulate data
- Format text output using f-strings
- Define and call functions with parameters
- Import and use external libraries like turtle graphics
- Control program flow with if/else/elif statements
- Repeat actions efficiently using loops

#### Prerequisites
- Completion of the "Getting Started" course (or familiarity with this platform)`,
  image: "images/course_icon_python_intro.svg",
  difficulty: "beginner",
  units: [
    "00_intro",
    "01_variables",
    "02_strings",
    "03_functions",
    "04_functions_advanced",
    "05_conditionals",
    "06_loops",
  ],
};

export default courseManifest;
