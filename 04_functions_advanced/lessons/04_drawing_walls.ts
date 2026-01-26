import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  TestingSectionData,
  ReflectionSectionData,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  MatchingSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "The Brick Wall",
  guid: "e31932b3-cfc5-4f7c-8e65-b0fc0a01a367" as LessonId,
  description:
    "Build a complex structure by creating a hierarchy of functions: Bricks make Rows, Rows make Walls.",
  sections: [
    {
      kind: "Information",
      id: "wall-intro",
      title: "The Running Bond",
      content: [
        {
          kind: "text",
          value:
            "In the previous lessons, you built shapes into houses into neighborhoods. Now you're going to do the same thing in a different domain: bricks into rows into walls. This pattern — simple pieces combining into complex structures — is how all large programs are built.\n\nBrick walls are strong because the bricks are offset. One row starts with a full brick, the next starts with a half-brick. To draw this, we need different types of rows. Instead of writing one giant script, we will build a hierarchy of functions:\n1. **Low Level:** `small_brick` and `big_brick`\n2. **Mid Level:** `draw_row_a` and `draw_row_b`\n3. **High Level:** `draw_wall`\n\nThis exercise is inspired by UC Berkeley's CS10 course. Computer Science has a culture of sharing — just as functions let you reuse code, CS educators share lessons and ideas freely. You're benefiting from that tradition right now.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "Testing",
      id: "test-bricks" as SectionId,
      title: "Step 1: The Bricks",
      content: [
        {
          kind: "text",
          value:
            'We have provided three helper functions: `thoughtful_code.goto_start()`, `thoughtful_code.small_brick()` (width 25) and `thoughtful_code.big_brick()` (width 50). Both are 20 pixels tall. Both functions leave the turtle at the bottom-right corner of the brick, ready to draw the next brick immediately.\n\nWrite a script that has the turtle "goto" the start, draws one small brick, then draws one big brick right next to it. Since the brick functions leave the turtle in the right position, you shouldn\'t need to move the turtle between bricks.',
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\nimport thoughtful_code\n\n# Library functions provided: small_brick(), big_brick()\n# Both leave the turtle at the bottom-right corner, ready for the next brick\n\n# Draw small brick\n\n# Draw big brick\n",
        libraryCode:
          "import turtle\ndef goto_start():\n    turtle.penup()\n    turtle.backward(100)\n    turtle.right(90)\n    turtle.backward(100)\n    turtle.pendown()\ndef small_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(25)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(25)\n\ndef big_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(50)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(50)\n",
      },
      testMode: "procedure",
      functionToTest: "__main__",
      visualThreshold: 0.999,
      testCases: [
        {
          description: "Draw one of each brick",
          input: [],
          expected: null,
          referenceImage: "images/turtle_two_bricks.png",
        },
      ],
    } as TestingSectionData,
    {
      kind: "Matching",
      id: "row-logic-match" as SectionId,
      title: "Planning the Rows",
      content: [
        {
          kind: "text",
          value:
            "We need two types of rows to make the Running Bond pattern work. Match the function name to the correct brick pattern.",
        },
      ],
      prompts: [
        { big_start_row: "Big, Big, Big, Small (ends with half brick)" },
        { small_start_row: "Small, Big, Big, Big (starts with half brick)" },
        {
          wall: "Stack of alternating rows: big_start_row, small_start_row, ...",
        },
      ],
      feedback: {
        correct:
          "Correct! By alternating these two row types, the seams of the bricks won't line up — that's what makes the wall strong.",
      },
    } as MatchingSectionData,
    {
      kind: "Testing",
      id: "create-big-start-row" as SectionId,
      title: "Step 2: Define `big_start_row()`",
      content: [
        {
          kind: "text",
          value:
            "Define `big_start_row()`. It should draw **3 Big Bricks** followed by **1 Small Brick**. The total width will be 175 pixels (50 + 50 + 50 + 25). Remember: each brick function leaves the turtle ready for the next brick.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n# Helpers provided: small_brick(), big_brick()\n\ndef draw_row_a():\n    # Big, Big, Big, Small\n    pass\n\ndraw_row_a()",
        libraryCode:
          "import turtle\ndef goto_start():\n    turtle.penup()\n    turtle.backward(100)\n    turtle.right(90)\n    turtle.backward(100)\n    turtle.pendown()\ndef small_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(25)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(25)\n\ndef big_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(50)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(50)\n",
      },
      testMode: "procedure",
      functionToTest: "draw_row_a",
      visualThreshold: 0.95,
      testCases: [
        {
          description: "Draw `big_brick_row`",
          input: [],
          expected: null,
          referenceImage: "images/turtle_big_brick_row",
        },
      ],
    } as TestingSectionData,
    {
      kind: "Testing",
      id: "create-row-b" as SectionId,
      title: "Step 3: Define Row B",
      content: [
        {
          kind: "text",
          value:
            "Now define `small_brick_row()`. It should start with **1 Small Brick**, followed by **3 Big Bricks**. This row is also 175 pixels wide (25 + 50 + 50 + 50).",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n# Helpers provided: small_brick(), big_brick()\n\ndef draw_row_b():\n    # Small, Big, Big, Big\n    pass\n\ndraw_row_b()",
        libraryCode:
          "import turtle\ndef goto_start():\n    turtle.penup()\n    turtle.backward(100)\n    turtle.right(90)\n    turtle.backward(100)\n    turtle.pendown()\ndef small_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(25)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(25)\n\ndef big_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(50)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(50)\n",
      },
      testMode: "procedure",
      functionToTest: "draw_row_b",
      visualThreshold: 0.95,
      testCases: [
        {
          description: "Draw `small_brick_row`",
          input: [],
          expected: null,
          referenceImage: "images/turtle_small_brick_row",
        },
      ],
    } as TestingSectionData,
    {
      kind: "MultipleSelection",
      id: "hierarchy-check",
      title: "Checking the Hierarchy",
      content: [
        {
          kind: "text",
          value:
            "We are about to build the entire wall. Which functions will `draw_wall` call directly? Select all that apply.",
        },
      ],
      options: [
        "`draw_row_a`",
        "`draw_row_b`",
        "`small_brick`",
        "`turtle.forward`",
      ],
      correctAnswers: [0, 1],
      feedback: {
        correct:
          "Correct! The Wall calls the Rows. The Rows call the Bricks. The Bricks call the Turtle commands. Each level only talks to the level directly below it — that's a hierarchy.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Testing",
      id: "draw-wall-challenge" as SectionId,
      title: "Step 4: The Wall",
      content: [
        {
          kind: "text",
          value:
            "Finally, create the `draw_wall` function. It should stack three rows in the Running Bond pattern: `big_brick_row()`, then `small_brick_row(), then `big_brick_row().\n\nAfter drawing each row, the turtle is at the right end. To start the next row, you need to:\n1. Go backward 175 pixels (the row width) to return to the left edge\n2. Turn left 90 degrees to face up\n3. Go forward 20 pixels (one brick height)\n4. Turn right 90 degrees to face right again\n\nWe've provided the movement code for the first transition. Follow the pattern for the second.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n# Row functions provided: draw_row_a(), draw_row_b()\n\ndef draw_wall():\n    # Row A\n    draw_row_a()\n    \n    # Move to start of next row\n    turtle.backward(175)\n    turtle.left(90)\n    turtle.forward(20)\n    turtle.right(90)\n    \n    # Row B\n    draw_row_b()\n    \n    # Move to start of next row (follow the pattern above)\n    \n    # Row A\n\ndraw_wall()",
        libraryCode:
          "import turtle\ndef goto_start():\n    turtle.penup()\n    turtle.backward(100)\n    turtle.right(90)\n    turtle.backward(100)\n    turtle.pendown()\ndef small_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(25)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(25)\n\ndef big_brick():\n    turtle.fillcolor('red')\n    turtle.begin_fill()\n    for i in range(2):\n        turtle.forward(50)\n        turtle.left(90)\n        turtle.forward(20)\n        turtle.left(90)\n    turtle.end_fill()\n    turtle.forward(50)\n",
      },
      testMode: "procedure",
      functionToTest: "draw_wall",
      visualThreshold: 0.9,
      testCases: [
        {
          input: [null],
          expected: "SHAPE:full_wall",
          description: "Draw the stacked wall",
        },
      ],
    } as TestingSectionData,
    {
      kind: "MultipleChoice",
      id: "maintenance-quiz",
      title: "The Lazy Programmer",
      content: [
        {
          kind: "text",
          value:
            "Suppose you decided the wall looks too short. You want to make the bricks taller (30 pixels instead of 20 pixels). Where in the code do you need to make changes?",
        },
      ],
      options: [
        "In `draw_wall` (because it draws the wall)",
        "In `draw_row_a` and `draw_row_b` (because they draw lines of bricks)",
        "In `small_brick` and `big_brick` (because they define the brick shape)",
        "In every single function",
      ],
      correctAnswer: 2,
      feedback: {
        correct:
          "Correct! You change the low-level brick functions. The Rows and the Wall will automatically use the new, taller bricks. This is the power of hierarchical abstraction: change the definition in one place, and everything that uses it gets the upgrade.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Reflection",
      id: "wall-reflection" as SectionId,
      title: "Reflection: The Hierarchy",
      content: [
        {
          kind: "text",
          value:
            'You just built a wall using a hierarchy: `draw_wall` calls `big_brick_row` and `small_brick_row`, which call `small_brick` and `big_brick`, which call `turtle.forward` and other turtle commands.\n\nImagine you built this wall without any functions — just 100 lines of `turtle.forward` and `turtle.left` commands. Now imagine you need to make two changes: (1) make all bricks 30 pixels tall instead of 20, and (2) add a fourth row to the wall.\n\nCompare how hard these changes would be in the "100 lines of turtle commands" version versus the hierarchical version you just built. Use this comparison to explain why breaking code into layers matters. Use the phrase "as seen in the example above."',
        },
      ],
      topic: "Hierarchical Abstraction",
      isTopicPredefined: true,
      code: "# Hierarchical version:\ndraw_wall()\n\n# vs. 100 lines of:\n# turtle.forward(50)\n# turtle.left(90)\n# turtle.forward(20)\n# ...",
      isCodePredefined: true,
      explanation:
        "Explain how the hierarchy makes changes easier (3-4 sentences)",
      isExplanationPredefined: false,
    } as ReflectionSectionData,
    {
      kind: "Information",
      id: "wall-conclusion",
      title: "Conclusion",
      content: [
        {
          kind: "text",
          value:
            "You've now built two complete hierarchies: shapes → house → neighborhood, and bricks → rows → wall. In both cases, you started with simple pieces and combined them into increasingly complex structures. Each layer hid the details of the layer below it.\n\nThis is how real software is built. No one writes a program with millions of lines of code in one file. Instead, they build small functions, combine them into bigger functions, and combine those into even bigger systems. Abstraction makes it possible to manage complexity that would otherwise be overwhelming.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
