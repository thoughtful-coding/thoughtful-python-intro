import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  PRIMMSectionData,
  TestingSectionData,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  MatchingSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Building a House",
  guid: "b11ee608-1e24-44dd-9488-b26690b1c8d2" as LessonId,
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
            "In the previous lesson, you learned about the `turtle` library. In this lesson, we're going to talk about the most important concept in Computer Science: abstraction.\n\n**Abstraction is the act of hiding details** to focus on the big picture. Abstraction is like knowing how to call a function without worrying about the details of how the function works. For example, you can call the `print()` function without worrying about the millions of lines of code it uses to draw individual pixels on the screen.",
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
            "Abstraction is so powerful because it allows you to ignore the details while you focus on a high-level goal. Which of the following real-world situations are examples of abstraction? Select all that apply.",
        },
      ],
      options: [
        "Clicking an app icon (instead of writing all the code to launch it)",
        "Taking apart a 1950's toaster (instead of taking apart a modern computer)",
        "Writing a letter to a friend (instead of talking to them directly)",
        "Ordering a pre-made pizza (instead of growing the wheat and tomatoes yourself)",
      ],
      correctAnswers: [0, 1],
      feedback: {
        correct:
          "Correct! For pizza and apps, you to get the result without worrying about the messy details.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "MultipleChoice",
      id: "library-reveal-mc",
      title: "Peeking Inside the Library",
      content: [
        {
          kind: "text",
          value:
            "We're going to illustrate abstraction using turtles. To do this, you're going to use functions that are similar to the ones you analyzed and created in the previous lesson. The functions are `draw_square_right(size, color)` and `draw_triangle_left(size, color)`.\n\nWhat's important to understand is that these functions don't exist in the turtle library. Instead, programmers at _Thoughtful Coding_ created these functions and put them into our own library called `thoughtful_code`.\n\nBelow is one of the functions that we wrote and put in the library. You might notice commands you haven't learned yet, like `turtle.begin_fill()` and `turtle.end_fill()`. **This is the power of abstraction.** The programmer who wrote the library figured out how to fill shapes with color so that you don't have to. You just use their function!",
        },
        {
          kind: "code",
          value:
            "def draw_square_right(size, color):\n    # New concepts handled for you:\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    \n    # Familiar concepts you already know:\n    turtle.forward(size)\n    turtle.right(90)\n    turtle.forward(size)\n    turtle.right(90)\n    turtle.forward(size)\n    turtle.right(90)\n    turtle.forward(size)\n    turtle.right(90)\n        \n    turtle.end_fill()",
        },
        {
          kind: "text",
          value:
            "Based on the code above, what does this function allow us to do?",
        },
      ],
      options: [
        "It defines a function that draws a black square in the center of the canvas",
        "It defines a function that draws a colored square at the turtle's position",
        "It changes the square color based on what its previous value was",
        "It imports a square image from the internet and puts it into the canvas",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! Even though it uses advanced commands like `begin_fill` inside, you can use it just like any other function.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "PRIMM",
      id: "observe-helpers-primm",
      title: "Testing the Tools",
      content: [
        {
          kind: "text",
          value:
            "Now that you've seen how the `thoughtful_code.draw_square_right` function was defined, let's use it. The program below imports the `thoughtful_code` library and uses the function you just analyzed plus the `thoughtful_code.draw_triangle_left` function.\n\nNotice that we can simply **use** the functions by passing arguments (size and color). Predict what will appear on the screen.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          'import turtle\nimport thoughtful_code\n\n# We use the tool we just looked at\nthoughtful_code.draw_square_right(100, "green")\n\n# We use another tool from the same library\nthoughtful_code.draw_triangle_left(90, "yellow")\n\nthoughtful_code.draw_square_right(70, "blue")\nthoughtful_code.draw_triangle_left(50, "red")\n',
        libraryCode:
          "import turtle\ndef draw_square_right(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle_left(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.left(120)\n    turtle.end_fill()\n",
      },
      predictPrompt:
        "How many shapes will be drawn, and what colors will they be?",
      conclusion:
        "It draws four shapes! Because the complexity is hidden inside the library functions, the main program is short and easy to read.",
    } as PRIMMSectionData,
    {
      kind: "MultipleChoice",
      id: "abstraction-check",
      title: "Where is the Code?",
      content: [
        {
          kind: "text",
          value:
            "In the example above, a turtle drew a very interesting shape. Why don't you see `turtle.forward` or `turtle.right` anywhere in the program?",
        },
      ],
      options: [
        "Because the computer forgot about them",
        "Because `draw_square_right` is a built-in Python command like `print`",
        'Because the detailed code is "hidden" inside the functions provided by the library',
        "Because `draw_square_right` uses magic, not code",
      ],
      correctAnswer: 2,
      feedback: {
        correct:
          "Correct! This is abstraction. You use the function without needing to see exactly how it was built every time.",
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
            "Now that you understand the concept, let's look at a useful analogy: building a house. In the real world, construction workers don't bake their own bricks or plane their own boards; they use materials provided by a factory. This is an example of abstraction. They don't need to worry about how the materials are made; they just use them.\n\nIn the remainder of the lesson, we're going to build on this analogy to use the `draw_square_right()` and `draw_triangle_left()` functions to draw a house. This is exactly like building a home. We don't worry about the low-level details (`turtle.move` or turning trees into boards). Instead we use higher-level concepts (`thoughtful_code.draw_square_right` and bricks) to create what we want.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "MultipleChoice",
      id: "why-abstract-benefits",
      title: "Why use Abstraction?",
      content: [
        {
          kind: "text",
          value:
            "Why is it easier to draw a house using `thoughtful_code.draw_square_right()` instead of writing out all the `turtle.forward()` and `turtle.right()` commands manually?",
        },
      ],
      options: [
        "It makes the computer run faster and more consistently",
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
      kind: "PRIMM",
      id: "house-logic-primm",
      title: "The Architect's Plan",
      content: [
        {
          kind: "text",
          value:
            'The code below attempts to make a very simple "house". We have all the pieces we need (a square and a triangle), but there is a problem with the result. Predict what the house will look like:',
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          'import turtle\nimport thoughtful_code\n\nthoughtful_code.draw_square_right(50, "yellow")\nthoughtful_code.draw_triangle_left(50, "black")',
        libraryCode:
          "import turtle\ndef draw_square_right(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle_left(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.left(120)\n    turtle.end_fill()\n",
      },
      predictPrompt:
        "The code draws a square, then immediately draws a triangle. What shape will this produce?",
      conclusion:
        "The house is on its side! Because the turtle starts facing UP, the 'floor' of the house was drawn as a vertical wall.",
    } as PRIMMSectionData,
    {
      kind: "Testing",
      id: "create-house-func" as SectionId,
      title: "Challenge: The Blueprint",
      content: [
        {
          kind: "text",
          value:
            "Now you will build your own house from that is standing upright. Create the `draw_house()` function using the components from the `thoughtful_code` library.\n\n1. Draw a yellow square (size 50)\n2. Move the turtle to the top-left corner and face right\n3. Draw a black triangle (size 50) for the roof.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\nimport thoughtful_code\n\n# `thoughtful_code.draw_square_right(size, color)` provided\n# `thoughtful_code.draw_triangle_left(size, color)` provided\n\ndef draw_house():\n    # 1. Place the Body\n\n    # 2. Move to top-left via `turtle.forward(size)` and `turtle.right(angle)`\n\n    # 3. Place the Roof\n\n# Test the Blueprint\ndraw_house()",
        libraryCode:
          "import turtle\ndef draw_square_right(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(4):\n        turtle.forward(size)\n        turtle.right(90)\n    turtle.end_fill()\n\ndef draw_triangle_left(size, color):\n    turtle.fillcolor(color)\n    turtle.begin_fill()\n    for i in range(3):\n        turtle.forward(size)\n        turtle.left(120)\n    turtle.end_fill()\n",
      },
      testMode: "procedure",
      functionToTest: "draw_house",
      visualThreshold: 0.999,
      testCases: [
        {
          description: "The upright house",
          input: [],
          expected: null,
          referenceImage: "images/turtle_color_house_50.png",
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
        { "`draw_square_right()`": "High Level Concept" },
        { "`draw_triangle_left()`": "High Level Concept" },
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
