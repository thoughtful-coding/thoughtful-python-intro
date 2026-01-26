import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  TestingSectionData,
  PRIMMSectionData,
  MultipleSelectionSectionData,
  MatchingSectionData,
  ReflectionSectionData,
  MultipleChoiceSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "The Neighborhood",
  guid: "32f661bf-0a48-4d1f-a8fe-15cf346c7776" as LessonId,
  description:
    "Use your house function to build a street, and learn how changing the underlying function updates the whole town.",
  sections: [
    {
      kind: "Information",
      id: "neighborhood-intro",
      title: "One Function, Many Houses",
      content: [
        {
          kind: "text",
          value:
            "In the previous lesson, you built something: a `draw_house()` function that hides all the geometry of squares and triangles behind a single command. You taught Python a new skill. In this lesson, you're going to use that skill to create an even more intricate design: an entire neighborhood. You'll be using abstraction since you won't think about triangles and squares anymore — just houses.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "PRIMM",
      id: "street-primm",
      title: "Building a Street",
      content: [
        {
          kind: "text",
          value:
            "Read the code below. It calls `draw_house()` three times. Predict what the output will look like on the screen.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\nimport thoughtful_code\n\nthoughtful_code.draw_house()\n\nturtle.forward(70)\nturtle.left(90)\n\nthoughtful_code.draw_house()\n\nturtle.forward(70)\nturtle.left(90)\n\nthoughtful_code.draw_house()",
        libraryCode:
          "import turtle\ndef draw_square_right(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle_left(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.left(120)\n    turtle.end_fill()\ndef draw_house():\n    draw_square_right(50, 'yellow')\n    turtle.forward(50)\n    turtle.right(90)\n    draw_triangle_left(50, 'black')\n    turtle.right(90)\n    turtle.forward(50)\n    turtle.left(90)",
      },
      predictPrompt: "Will the houses be stacked? In a row? Overlapping?",
      conclusion:
        "They are in a row! The `turtle.forward(70)` moves the start position for the next house.",
    } as PRIMMSectionData,
    {
      kind: "Testing",
      id: "linear-neighborhood" as SectionId,
      title: "Challenge: The Street",
      content: [
        {
          kind: "text",
          value:
            'The `draw_house()` function inside the `thoughtful_code` library creates houses that are 50 pixels wide. It is now your goal to create your own "street" of 3 houses. The difference between this "street" and the "street" above is that your houses should be a bit closer. \n\n1. Use the provided `draw_house()` function.\n2. Space them out so they\'re exactly 10 pixels apart (each house is 50 pixels wide).',
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\nimport thoughtful_code\n# thoughtful_code.draw_house() is provided\n\n# House 1\n\n# Move to next spot\n\n# House 2\n\n# Move to next spot\n\n# House 3",
        libraryCode:
          "import turtle\ndef draw_square_right(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle_left(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.left(120)\n    turtle.end_fill()\ndef draw_house():\n    draw_square_right(50, 'yellow')\n    turtle.forward(50)\n    turtle.right(90)\n    draw_triangle_left(50, 'black')\n    turtle.right(90)\n    turtle.forward(50)\n    turtle.left(90)",
      },
      testMode: "procedure",
      functionToTest: "__main__",
      visualThreshold: 0.9,
      testCases: [
        {
          description: "The suburbs",
          input: [],
          expected: null,
          referenceImage: "images/turtle_suburbs_60.png",
        },
      ],
    } as TestingSectionData,
    {
      kind: "PRIMM",
      id: "random-house-primm5" as SectionId,
      title: "Randomizing the House",
      content: [
        {
          kind: "text",
          value:
            "That neighborhood looks a bit boring - all the houses are yellow. We can easily make a much more interesting row of houses by making a small change to the `draw_house` function. This is the power of abstraction: change the rule in one place, and it applies everywhere.\n\nWe've updated the `draw_house` function inside the `thoughtful_code` library to use a new library function: `thoughtful_code.get_random_color()` for the body color. You can see the exact code below:",
        },
        {
          kind: "code",
          value:
            'def draw_house():\n    color = thoughtful_code.get_random_color()\n    thoughtful_code.draw_square_right(50, color)\n    turtle.forward(50)\n    turtle.right(30)\n    thoughtful_code.draw_triangle_left(50, "black")',
        },
        {
          kind: "text",
          value:
            "Predict what will happen when we run the EXACT same street code from before.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\nimport thoughtful_code\n\nthoughtful_code.draw_house()\nturtle.forward(70)\nturtle.left(90)\n\nthoughtful_code.draw_house()\nturtle.forward(70)\n\nturtle.left(90)\n\nthoughtful_code.draw_house()",
        libraryCode:
          "import turtle\nimport random\ndef get_random_color():\n    return random.choice(['blue', 'green', 'yellow', 'red'])\ndef draw_square_right(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle_left(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.left(120)\n    turtle.end_fill()\ndef draw_house():\n    color = get_random_color()\n    draw_square_right(50, color)\n    turtle.forward(50)\n    turtle.right(90)\n    draw_triangle_left(50, 'black')\n    turtle.right(90)\n    turtle.forward(50)\n    turtle.left(90)",
      },
      predictPrompt:
        "Will the houses be the same color? Will they change every time you run it?",
      conclusion:
        "Every house is now a different random color! We updated the function definition' so every function call got the upgrade.",
    } as PRIMMSectionData,
    {
      kind: "MultipleChoice",
      id: "abstraction-benefit-quiz",
      title: "Why Use Functions?",
      content: [
        {
          kind: "text",
          value:
            "Imagine that instead of using functions you drew 50 houses manually. How many lines of code would you have to change if afterwards you decided you actually wanted to make all the roofs red instead of black?",
        },
      ],
      options: [
        "0 lines (The computer knows what you want)",
        "1 line (The definition)",
        "50 lines (Every single house)",
        "350 lines (Every single line in the drawing)",
      ],
      correctAnswer: 2,
      feedback: {
        correct:
          "Exactly! Without functions, you'd have to edit 50 places. With functions, you edit the definition once, and all 50 houses update.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Matching",
      id: "abstraction-levels-match" as SectionId,
      title: "Levels of Abstraction",
      content: [
        {
          kind: "text",
          value:
            "We are now working with functions inside functions. Match the code to its 'Level' of abstraction.",
        },
      ],
      prompts: [
        { "`turtle.forward(10)`": "Low Level (Tiny Details)" },
        { "`draw_square_right(50)`": "Mid Level (Building Blocks)" },
        { "`draw_neighborhood()`": "High Level (Big Picture)" },
      ],
      feedback: {
        correct:
          "Perfect! High-level functions call mid-level functions, which call low-level commands. Good programmers spend most of their time at the High Level.",
      },
    } as MatchingSectionData,
    {
      kind: "MultipleSelection",
      id: "function-purpose-check",
      title: "Function Roles",
      content: [
        {
          kind: "text",
          value:
            "Which of these are responsibilities of the `draw_house` function? Select all that apply.",
        },
      ],
      options: [
        "Choosing the color of the house",
        "Deciding WHERE on the screen the house goes",
        "Combining a square and a triangle",
        "Drawing the entire neighborhood",
      ],
      correctAnswers: [0, 2],
      feedback: {
        correct:
          "Correct! `draw_house` decides what a house LOOKS like (color, shape). It does NOT decide WHERE it goes (that's the job of the code calling it).",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Reflection",
      id: "abstraction-reflection",
      title: "Reflection: Layers of Abstraction",
      content: [
        {
          kind: "text",
          value:
            "Think back on the process you went through to build this neighborhood. You didn't start by trying to draw a whole street at once.\n\n1. **Turtle**: You started with basic lines and turns (`forward`, `right`).\n2. **Shapes**: You organized those lines into reusable shapes (`draw_square_right`).\n3. **House**: You combined those shapes to define a complex object (`draw_house`).\n4. **Neighborhood**: You used that object to build a larger system.\n\nEach step created a new 'layer' of abstraction that hid the details of the step below it.",
        },
      ],
      topic: "Layers of Abstraction",
      isTopicPredefined: true,
      code: "# Level 1: Basic Moves\nturtle.forward(10)\n\n# Level 2: Simple Shapes\ndraw_square_right(50)\n\n# Level 3: Complex Objects\ndraw_house()\n\n# Level 4: Systems\ndraw_street()",
      isCodePredefined: true,
      explanation:
        "Explain why building in 'layers' makes it easier to write (and fix) large programs compared to using only basic turtle commands.",
      isExplanationPredefined: false,
    } as ReflectionSectionData,
  ],
};

export default lessonData;
