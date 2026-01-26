import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  ObservationSectionData,
  MultipleChoiceSectionData,
  PRIMMSectionData,
  ReflectionSectionData,
  ParsonsSectionData,
  TestingSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Drawing with Turtles",
  guid: "973a0fb8-67fa-463d-a12d-0df9f55eb547" as LessonId,
  description:
    "Learn to create graphics using a Python library called `turtle` to draw shapes and patterns.",
  sections: [
    {
      kind: "Information",
      id: "turtle-intro",
      title: "Meet Your Turtle",
      content: [
        {
          kind: "text",
          value:
            'One of the oldest ways to teach programming is by having students use drawing libraries. These libraries are called "turtle libraries" because they let you create drawings by controlling a virtual turtle\'s movements around the screen. The "turtle" carries a pen and leaves a trail as it moves. You can tell the "turtle" to move forward, turn, lift its pen up, put its pen down, and even change the pen\'s colors. By combining these simple commands, you can create complex drawings like the one below.',
        },
        {
          kind: "image",
          src: "https://cdn-blog.adafruit.com/uploads/2019/06/turtlebg.jpg",
          alt: "Example of turtle graphics program creating complex shapes",
          maxWidthPercentage: 40,
        },
        {
          kind: "text",
          value:
            "Drawing libraries are wonderful tools for learning programming because you can see what each line of code does. With this foundation, you can build up to more and more complex shapes.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "Observation",
      id: "first-turtle" as SectionId,
      title: "Your First Turtle Program",
      content: [
        {
          kind: "text",
          value:
            "Let's start with the basics. The program below imports the `turtle` library. It then uses functions within the library to move the turtle around the screen. Run the program and watch what the turtle does. Pay attention to how each individual function affects the turtle's movement.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\ndef make_T():\n    turtle.forward(100)\n    turtle.right(90)\n    turtle.forward(100)\n    turtle.left(180)\n    turtle.forward(200)\n\nmake_T()",
        allowImageDownload: true,
      },
    } as ObservationSectionData,
    {
      kind: "MultipleChoice",
      id: "turtle-angle",
      title: "Turtle Angles",
      content: [
        {
          kind: "text",
          value: "In the code above, what does `turtle.right(90)` function do?",
        },
      ],
      options: [
        "Moves the turtle 90 pixels to the right",
        "Draws a line 90 pixels long",
        "Makes the turtle face right on the screen",
        "Rotates the turtle 90 degrees to the right",
      ],
      correctAnswer: 3,
      feedback: {
        correct:
          "Correct! The turtle rotates 90 degrees to the right. Think of it like making a right-angle turn.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "PRIMM",
      id: "square-primm" as SectionId,
      title: "Drawing A Shape",
      content: [
        {
          kind: "text",
          value:
            "Now let's try a more complex shape. The code below has three main parts. First, the `turtle` library is imported, giving us the ability to draw. Second, there's a `make_shape()` function definition that has the turtle draw some mysterious shape. Finally, there's a `make_shape()` function call that results in the shape being drawn once. Given all this, predict what shape will be drawn, then run the program to check your prediction.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\ndef make_shape():\n    turtle.forward(100)\n    turtle.right(90)\n    turtle.forward(100)\n    turtle.right(90)\n    turtle.forward(100)\n    turtle.right(90)\n    turtle.forward(100)\n    turtle.right(90)\n\nmake_shape()",
      },
      predictPrompt:
        "Look at the pattern of `forward()` and `right()` function calls. What shape do you think this will draw?",
      conclusion:
        "It draws a square! Each `right(90)` function call makes a 90-degree turn, and four 90-degree turns bring you back to where you started.",
    } as PRIMMSectionData,

    {
      kind: "PRIMM",
      id: "multi-square-primm" as SectionId,
      title: "Drawing Multiple Shapes",
      content: [
        {
          kind: "text",
          value:
            "The code below is very similar to the program above. There's only one difference: we call the function four times and turn right between each function call. Given this change, predict what shape will be drawn, then run the program to check your prediction.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\ndef make_shape():\n    turtle.forward(100)\n    turtle.right(90)\n    turtle.forward(100)\n    turtle.right(90)\n    turtle.forward(100)\n    turtle.right(90)\n    turtle.forward(100)\n    turtle.right(90)\n\nmake_shape()\nturtle.right(90)\nmake_shape()\nturtle.right(90)\nmake_shape()\nturtle.right(90)\nmake_shape()\n",
      },
      predictPrompt:
        "Look at the pattern of `forward()` and `right()` functions. What shape do you think this will draw?",
      conclusion:
        "The same square-drawing code ran four times. Without the function, you'd need 32 lines of turtle commands instead of 4 function calls. This is why we package code into functions.",
    } as PRIMMSectionData,
    {
      kind: "Parsons",
      id: "draw-triangle" as SectionId,
      title: "Challenge: Draw a Triangle",
      content: [
        {
          kind: "text",
          value:
            "Now it's your turn! Write a program that draws an equilateral triangle (all sides the same length). Since this is your first time creating a turtle program from scratch, we've provided all the code for you; you just need to place the blocks in the right order. If you're confused about exactly what commands to use, look at the programs above for inspiration.",
        },
      ],
      puzzle: {
        codeBlocks: [
          ["import turtle"],
          ["def make_triangle():"],
          ["    turtle.left(120)"],
          ["    turtle.right(120)"],
          ["    turtle.right(120)"],
          ["    turtle.right(120)"],
          ["    turtle.forward(100)"],
          ["    turtle.forward(100)"],
          ["    turtle.forward(100)"],
          ["make_triangle()"],
        ],
        visualization: "turtle",
      },
      testMode: "procedure",
      functionToTest: "make_triangle",
      visualThreshold: 0.999,
      testCases: [
        {
          description: "Triangle with side length 100",
          input: [],
          expected: null,
          referenceImage: "images/turtle_triangle.png",
        },
      ],
    } as ParsonsSectionData,
    {
      kind: "Testing",
      id: "small-steps-tests" as SectionId,
      title: "Challenge: A Few Small Steps",
      content: [
        {
          kind: "text",
          value:
            'Now that you used the blocks to create a triangle, let\'s see if you can write a program all by yourself. Your goal is to create a drawing that looks like two steps as seen in the "Target Drawing". The lines of each step should be 50 pixels long and you should only turn at right (90 degree) angles. You need to write 8 lines of code to fill in the blanks: 1 import line at the top, and 7 turtle command lines inside the function.\n\nHint: if you get confused, look at the program you created to draw a triangle.',
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "# 1 line of code here\n\ndef draw_stairs():\n    # 7 lines of code here\n\ndraw_stairs()",
      },
      testMode: "procedure",
      functionToTest: "draw_stairs",
      visualThreshold: 0.999,
      testCases: [
        {
          description: "Two small steps",
          input: [],
          expected: null,
          referenceImage: "images/turtle_two_steps_50.png",
        },
      ],
    } as TestingSectionData,
    {
      kind: "Reflection",
      id: "library-reflection" as SectionId,
      title: "Libraries Reflection",
      content: [
        {
          kind: "text",
          value:
            "Libraries are collections of functions that extend Python's capabilities. Without libraries, you'd have to write every program from scratch. When you `import` a library, it's like you're loading a specific skillset - it gives you access to all the skills (functions) inside.\n\nWrite a simple 3-4 line example that imports and uses a function from the `random` or `math` library (seen in the previous lesson). Then, in 3-4 sentences, explain how libraries make programming more powerful. Use the phrase \"as seen in the example above\".",
        },
      ],
      topic: "Using Python Libraries",
      isTopicPredefined: true,
      code: "Create an example using random or math library",
      isCodePredefined: false,
      explanation: "Explain how libraries help programmers (3-4 sentences)",
      isExplanationPredefined: false,
    } as ReflectionSectionData,
    {
      kind: "Information",
      id: "turtle-conclusion",
      title: "Conclusion",
      content: [
        {
          kind: "text",
          value:
            "In this lesson, you learned about a new library named `turtle`. In addition, you experimented with using that library within functions of your own to build increasingly complex shapes. In the next lesson, we'll use functions to build even more complex drawings. The goal is for you to appreciate how functions can package up other, smaller pieces to create something very interesting.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
