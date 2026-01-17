import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  MatchingSectionData,
  TestingSectionData,
  ParsonsSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Libraries Unit Challenge",
  guid: "f7a3c9d2-8e4b-5f6a-c1d8-3b9e7f2a4c6d" as LessonId,
  description:
    "Test your understanding of libraries, abstraction, and turtle graphics while reinforcing your knowledge of functions, variables, and data types.",
  sections: [
    {
      kind: "Information",
      id: "wrap-up-intro",
      title: "Thinking Like an Architect",
      content: [
        {
          kind: "text",
          value:
            "You have moved from being a bricklayer (writing individual commands) to being an architect (designing systems). You learned to `import` libraries and use their functions. You discovered that functions can call other functions, creating **layers of abstraction**. And you saw how changing one function definition updates everything that uses it.\n\nAs with the previous review sections, this lesson uses **interleaving** to help solidify your understanding. By pulling in everything you've learned so far and asking questions in a mixed-up order, your brain will be able to make stronger connections between the concepts. Be sure to take your time and think carefully about each problem!",
        },
      ],
    } as InformationSectionData,
    {
      kind: "MultipleChoice",
      id: "import-purpose",
      title: "Why Import?",
      content: [
        {
          kind: "text",
          value: "What does the line `import random` do in a Python program?",
        },
      ],
      options: [
        "Creates a random number immediately for your program to use",
        "Makes the functions in the `random` library available",
        "Prints a random value to the screen",
        "Deletes all previously used variables from the program",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! The `import` statement loads a library so you can use its functions. No code inside the library runs until you call one of its functions.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleChoice",
      id: "variable-review",
      title: "Review: Variable Logic",
      content: [
        {
          kind: "text",
          value:
            "Before diving deeper into abstraction, let's check your memory on variables. What is the value of `x` after the following code runs?",
        },
        {
          kind: "code",
          value: "x = 10\nx = x + 5\nx = x * 2",
        },
      ],
      options: ["10", "15", "30", "Error"],
      correctAnswer: 2,
      feedback: {
        correct: "Correct! 10 + 5 is 15. Then 15 * 2 is 30.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Matching",
      id: "dot-notation-match" as SectionId,
      title: "Reading Dot Notation",
      content: [
        {
          kind: "text",
          value:
            "The dot (`.`) tells Python to look inside a library for a function. Match each line of code with what it does:",
        },
      ],
      prompts: [
        { "`random.randint(1, 10)`": "Gets a random integer from 1 to 10" },
        { "`math.sqrt(16)`": "Calculates the square root of 16" },
        { "`turtle.forward(50)`": "Moves the turtle 50 pixels forward" },
        { "`turtle.right(90)`": "Rotates the turtle 90 degrees to the right" },
        {
          '`random.choice("ABC")`': "Picks a random character from the string",
        },
      ],
      feedback: {
        correct:
          "Excellent! The pattern is always `library.function(arguments)`. The dot means 'look inside this library for this function.'",
      },
    } as MatchingSectionData,
    {
      kind: "MultipleSelection",
      id: "type-errors-review",
      title: "Review: Type Errors",
      content: [
        {
          kind: "text",
          value:
            "Which of the following lines of code would result in a `TypeError`? Select all that apply.",
        },
      ],
      options: [
        'print("Score: " + 100)',
        'print(f"Score: {100}")',
        "print(50 + 50)",
        'print("50" + "50")',
        'print("Hello" - "World")',
        "print(10 - 5)",
      ],
      correctAnswers: [0, 4],
      feedback: {
        correct:
          "Correct! You can't use `+` to combine a string and an integer directly, and you can't use `-` with strings at all. F-strings handle the conversion automatically!",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Matching",
      id: "visual-hierarchy-match" as SectionId,
      title: "Deconstructing the Scene",
      content: [
        {
          kind: "text",
          value:
            "Look at this drawing of boats on the ocean. If you were writing the code for this, how would you organize your functions? Match the function name to its Abstraction Level.",
        },
        {
          kind: "image",
          src: "images/turtle_boats_waves.png",
          alt: "Diagram of triangle boats floating on rows of sine-wave water",
        },
      ],
      prompts: [
        { "`draw_ocean_scene()`": "High Level (The whole picture)" },
        { "`draw_boat()`": "Mid Level (A specific object)" },
        { "`draw_triangle()`": "Low Level (A basic shape)" },
      ],
      feedback: {
        correct:
          "Perfect! `draw_ocean_scene()` calls the `draw_boat()`, and `draw_boat()` calls `draw_triangle()`. That is the hierarchy of abstraction.",
      },
    } as MatchingSectionData,
    {
      kind: "MultipleChoice",
      id: "reuse-benefits",
      title: "Changes Ripple Up",
      content: [
        {
          kind: "text",
          value:
            "If you decided the sails on *every* boat were too small, what is the FASTEST way to fix it in your program?",
        },
      ],
      options: [
        "Rewrite the `draw_ocean_scene` function completely",
        "Change the size inside the `draw_boat` function",
        "Manually redraw every boat",
        "Change the size inside the `draw_triangle` function",
      ],
      correctAnswer: 3,
      feedback: {
        correct:
          "Correct! If you change the Low Level function (`draw_triangle`), that change ripples up. Every Boat uses the Triangle, so every Boat gets fixed automatically!",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleChoice",
      id: "fstring-with-math",
      title: "Review: F-Strings and Math",
      content: [
        {
          kind: "text",
          value: "What will the following code output?",
        },
        {
          kind: "code",
          value: 'size = 50\nprint(f"The house is {size * 2} pixels wide")',
        },
      ],
      options: [
        "The house is size * 2 pixels wide",
        "The house is {size * 2} pixels wide",
        "The house is 100 pixels wide",
        "TypeError: can't multiply string by int",
      ],
      correctAnswer: 2,
      feedback: {
        correct:
          "Correct! F-strings evaluate expressions inside the curly braces. Python calculates 50 * 2 = 100 and inserts that into the string.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleSelection",
      id: "turtle-state",
      title: "Turtle Position",
      content: [
        {
          kind: "text",
          value:
            "The turtle starts facing right. After running this code, which statements are true? Select all that apply.",
        },
        {
          kind: "code",
          value: "turtle.forward(50)\nturtle.right(90)\nturtle.forward(30)",
        },
      ],
      options: [
        "The turtle moved a total of 80 pixels",
        "The turtle is now facing down",
        "The turtle is back where it started",
        "The turtle made one right turn",
        "The turtle drew two lines",
      ],
      correctAnswers: [0, 1, 3, 4],
      feedback: {
        correct:
          "Correct! The turtle went forward 50, turned right (now facing South), then forward 30. That's 80 total pixels, two lines, one turn, and it ended up in a new position - not back where it started.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "MultipleSelection",
      id: "abstraction-concept",
      title: "True or False: Abstraction",
      content: [
        {
          kind: "text",
          value: "Select all TRUE statements about Abstraction.",
        },
      ],
      options: [
        "It hides details so you can focus on the big picture",
        "It makes programs run faster",
        "It allows you to reuse code easily",
        "It means you never have to write low-level code",
        "It lets you think about 'houses' instead of 'lines and angles'",
      ],
      correctAnswers: [0, 2, 4],
      feedback: {
        correct:
          "Correct! Abstraction is about organization, reuse, and working at the right level of detail. Someone still has to write the low-level code - but once it's written, everyone else can use it without thinking about those details.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Parsons",
      id: "import-and-use" as SectionId,
      title: "Challenge: Using a Library",
      content: [
        {
          kind: "text",
          value:
            "Arrange the code blocks to create a program that imports the `math` library, calculates the square root of 64, and prints the result with a message. The output should be exactly: `The answer is: 8.0`",
        },
      ],
      puzzle: {
        codeBlocks: [
          ["import math"],
          ["import Math"],
          ["result = math.sqrt(64)"],
          ["result = sqrt(64)"],
          ["result = math.sqrt[64]"],
          ['print(f"The answer is: {result}")'],
          ['print("The answer is: {result}")'],
        ],
        visualization: "console",
      },
      testMode: "procedure",
      functionToTest: "__main__",
      testCases: [
        {
          input: [null],
          expected: "The answer is: 8.0",
          description: "Should print the square root of 64",
        },
      ],
    } as ParsonsSectionData,
    {
      kind: "Matching",
      id: "identify-parts" as SectionId,
      title: "Identify the Parts",
      content: [
        {
          kind: "text",
          value:
            "Look at this code and match each labeled part to its correct name:",
        },
        {
          kind: "code",
          value:
            'import random\n\ndef pick_a_card(suit):\n    cards = "A23456789TJQK"\n    result = random.choice(cards)\n    print(f"{result} of {suit}")\n\npick_a_card("Hearts")',
        },
      ],
      prompts: [
        { "`random`": "Library" },
        { "`choice`": "Function name (from library)" },
        { "`pick_a_card`": "Function name (user-defined)" },
        { "`suit`": "Parameter" },
        { '`"Hearts"`': "Argument" },
        { '`pick_a_card("Hearts")`': "Function call" },
      ],
      feedback: {
        correct:
          "Excellent! You can identify all the key parts: libraries provide functions, parameters are placeholders in definitions, arguments are the actual values passed in calls.",
      },
    } as MatchingSectionData,
    {
      kind: "Testing",
      id: "final-forest-challenge" as SectionId,
      title: "Challenge: The Forest",
      content: [
        {
          kind: "text",
          value:
            "Let's prove you can build a system. Create a `draw_forest` function that draws 3 trees in a row using the provided `thoughtful_code.draw_tree(height)` helper.\n\nRequirements:\n1. Use `random.randint(50, 100)` to give each tree a random height\n2. Move the turtle forward between trees so they don't overlap\n3. Call your `draw_forest()` function at the end\n\nThis combines everything: Abstraction, Parameters, and Libraries.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\nimport random\nimport thoughtful_code\n\n# thoughtful_code.draw_tree(height) is provided - it draws a tree of the given height\n\ndef draw_forest():\n    # Draw 3 trees with random heights\n    # Move between each tree\n    pass\n\ndraw_forest()",
        libraryCode:
          "import turtle\ndef draw_tree(height):\n    turtle.fillcolor('green')\n    turtle.begin_fill()\n    turtle.left(90)\n    turtle.forward(height)\n    turtle.right(120)\n    turtle.forward(height)\n    turtle.right(120)\n    turtle.forward(height)\n    turtle.right(150)\n    turtle.end_fill()\n    turtle.forward(50)\n",
      },
      testMode: "procedure",
      functionToTest: "draw_forest",
      visualThreshold: 0.85,
      testCases: [
        {
          input: [null],
          expected: "SHAPE:forest",
          description: "Draw 3 random trees",
        },
      ],
    } as TestingSectionData,
    {
      kind: "Information",
      id: "wrap-up-conclusion",
      title: "Building on What You Know",
      content: [
        {
          kind: "text",
          value:
            "Excellent work! In this unit, you discovered that programming isn't about writing everything yourself - it's about building on layers of abstraction. The `print()` function you've used since day one? It hides millions of instructions. The `turtle` library? Someone else wrote all that drawing code so you could focus on shapes and houses.\n\nThis is how real software is built: small pieces combine into bigger pieces, which combine into even bigger pieces. A video game isn't millions of lines of code written by one person - it's thousands of functions, organized into hundreds of modules, built by teams who each focus on their own layer.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
