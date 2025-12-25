import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  ObservationSectionData,
  PRIMMSectionData,
  TestingSectionData,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  MatchingSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Building a House",
  guid: "advanced-func-house-uuid" as LessonId,
  description:
    "Learn to combine existing functions to create complex objects, the first step in abstraction.",
  sections: [
    {
      kind: "Information",
      id: "abstraction-intro",
      title: "Hiding the Details",
      content: [
        {
          kind: "text",
          value:
            "In the previous lesson, you learned about the `turtle` library. In this lesson, we're going to talk about the most important concept in Computer Science: **Abstraction**.\n\nAbstraction is the act of **hiding details** to focus on the big picture. Abstraction is like knowing how to call a function (e.g., `print()`), but not really worry how the details of the function work (e.g., the millions of lines of code that draw individual pixels on the screen).",
        },
      ],
    } as InformationSectionData,
    {
      kind: "MultipleSelection",
      id: "abstraction-scenarios",
      title: "Identifying Abstraction",
      content: [
        {
          kind: "text",
          value:
            "Which of the following real-world situations are examples of Abstraction (hiding details to focus on the goal)? Select all that apply.",
        },
      ],
      options: [
        "Ordering a pre-made pizza (instead of growing the wheat and tomatoes yourself)",
        "Clicking an app icon (instead of typing raw binary code to launch it)",
        "Taking apart a toaster (instead of taking apart a computer)",
        " a letter (instead of talking to someone directly)",
      ],
      correctAnswers: [0, 1],
      feedback: {
        correct:
          "Correct! For pizza and apps, you to get the result without worrying about the messy details.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Observation",
      id: "observe-helpers" as SectionId,
      title: "Testing the Tools",
      content: [
        {
          kind: "text",
          value:
            "We're going to illustrate abstraction using turtles. To do this, you're going to use functions that are very similar to the ones you analyzed and created in the previous lesson: `draw_square(size, color)` and `draw_triangle(size, color)`.\n\nWe have placed these functions into the `thoughtful_code` library. This means don't need to create them yourself; they are ready to use. Setting things up this way lets you focus on the high level goal rather than the lower level details. You provide the **arguments** (size and color), and the hidden code handles the details.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          'import turtle\nimport thoughtful_code\n\nthoughtful_code.draw_square(100, "green")\nthoughtful_code.draw_square(70, "blue")\nthoughtful_code.draw_triangle(50, "red")\n',
        libraryCode:
          "import turtle\ndef draw_square(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.right(120)\n    turtle.end_fill()\n",
      },
    } as ObservationSectionData,
    {
      kind: "MultipleChoice",
      id: "abstraction-check",
      title: "Where is the Code?",
      content: [
        {
          kind: "text",
          value:
            "In the example above, you used `draw_square` and `draw_triangle`. Why don't you see the code `turtle.forward` or `turtle.right` anywhere in the program?",
        },
      ],
      options: [
        "Because the computer forgot them",
        "Because `draw_square` is a built-in Python command like `print`",
        'Because the detailed code is "hidden" inside the function definition provided by the library',
        "Because `draw_square` uses magic, not code",
      ],
      correctAnswer: 2,
      feedback: {
        correct:
          "Correct! This is Abstraction. You use the tool without needing to see exactly how it was built every time.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Information",
      id: "builder-metaphor-intro",
      title: "Thinking Like a Builder",
      content: [
        {
          kind: "text",
          value:
            "Now that you understand the concept, let's look at a useful analogy: building a house. In the real world, construction workers don't bake their own bricks or plane their own boards; they use materials provided by a factory. This is an example of abstraction.\n\nIn the remainder of the lesson, we're going to build on this analogy to use the `draw_square()` and `draw_triangle()` functions build a house. This is exactly like building a home. We don't worry about the low-level details (`turtle.move` or turning trees into boards). Instead we use higher-level concepts (`draw_square` and bricks) to build a house.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "PRIMM",
      id: "house-logic-primm",
      title: "The Architect's Plan",
      content: [
        {
          kind: "text",
          value:
            'The code below attempts to make a very simple "house" by putting a black triangular room on top of a yellow room. Read the code below. We have all the pieces we need, but there is a problem with the positioning. Predict what it will look like:',
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          'import turtle\n# draw_square and draw_triangle are provided\n\ndraw_square(100, "yellow")\ndraw_triangle(100, "black")',
        libraryCode:
          "import turtle\ndef draw_square(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.right(120)\n    turtle.end_fill()\n",
      },
      predictPrompt:
        "The code draws a square, then immediately draws a triangle. What shape will this produce?",
      conclusion:
        "The triangle draws right on top of the square's bottom line! This is because the turtle ended at the bottom-left corner after the square.",
    } as PRIMMSectionData,
    {
      kind: "MultipleChoice",
      id: "why-abstract-benefits",
      title: "Why use Abstraction?",
      content: [
        {
          kind: "text",
          value:
            "Why is it easier to build this house using `draw_square` instead of writing out all the `forward` and `right` commands manually?",
        },
      ],
      options: [
        "It makes the computer run faster",
        "It allows us to think about 'Walls' and 'Roofs' instead of lines and angles",
        "It guarantees the house will be the correct color",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          "Exactly! Abstraction lets you think about the *concepts* (the house parts) rather than the *implementation* (the geometry).",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Testing",
      id: "create-house-func" as SectionId,
      title: "Challenge: The Blueprint",
      content: [
        {
          kind: "text",
          value:
            "Now you will build your own house from scratch. Create the `draw_house()` function using the components from the `thoughtful_code` library.\n\n1. Draw a yellow square (size 100)\n2. Move the turtle to the top-left corner and face right\n3. Draw a black triangle (size 100) for the roof.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\n# draw_square(size, color) and draw_triangle(size, color) are provided\n\ndef draw_house():\n    # 1. Place the Body\n\n    # 2. Move to top-left (Use left, forward, and right!)\n\n    # 3. Place the Roof\n\n# Test the Blueprint\ndraw_house()",
        libraryCode:
          "import turtle\ndef draw_square(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.right(120)\n    turtle.end_fill()\n",
      },
      testMode: "procedure",
      functionToTest: "draw_house",
      visualThreshold: 0.95,
      testCases: [
        {
          input: [null],
          expected: "SHAPE:house_basic",
          description: "Draw the house",
        },
      ],
    } as TestingSectionData,
    {
      kind: "MultipleSelection",
      id: "naming-conventions",
      title: "Naming the Blueprint",
      content: [
        {
          kind: "text",
          value:
            "You just created a function called `draw_house`. Which of the following are good reasons for this name? Select all that apply.",
        },
      ],
      options: [
        "It describes WHAT the function creates",
        "It hides the details of squares and triangles",
        "It is named `func1` so it is easy to type",
        "It tells you what libraries are used inside the function",
      ],
      correctAnswers: [0, 1],
      feedback: {
        correct:
          "Correct! A good name is descriptive. It tells you what the 'Black Box' does without needing to look inside.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Matching",
      id: "job-site-match" as SectionId,
      title: "The Job Site",
      content: [
        {
          kind: "text",
          value:
            "Let's review the Hierarchy of Abstraction. Match the code concept to the Construction Site role.",
        },
      ],
      prompts: [
        { "`turtle.forward(10)`": "Low Level Detail" },
        { "`turtle.right(10)`": "Low Level Detail" },
        { "`turtle.left(120)`": "Low Level Detail" },
        { "`draw_square()`": "High Level Concept" },
        { "`draw_triangle()`": "High Level Concept" },
        { "`draw_house()`": "Very High Level Concept" },
      ],
      feedback: {
        correct:
          'Perfect! We create functions at different "levels" of abstraction to tackle bigger and bigger problems.',
      },
    } as MatchingSectionData,
    {
      kind: "Information",
      id: "lesson-wrap-up",
      title: "Conclusion",
      content: [
        {
          kind: "text",
          value:
            'You have just seen how abstraction works. Abstraction lets you think at different levels, making it easier to break down problems and understand how things work. By using functions to "abstract away" lower level details, you can build massive, complex programs without getting lost in the details. In the next lesson, we will use these functions to build an entire Neighborhood!',
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
