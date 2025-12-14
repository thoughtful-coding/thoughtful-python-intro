import type { CourseManifest, CourseId } from "../../src/types/data";

/**
 * "Introduction to Python" course manifest.
 * Contains course metadata and unit ordering.
 */
const courseManifest: CourseManifest = {
  id: "intro-python" as CourseId,
  title: "Introduction to Python",
  description:
    "Learn Python programming from scratch with interactive lessons and exercises",
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
