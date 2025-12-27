import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  ObservationSectionData,
  PRIMMSectionData,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  TestingSectionData,
  DebuggerSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Patterns Within Patterns",
  guid: "e9f2d834-6b71-4a89-b523-1e7c9f8d2a56" as LessonId,
  description:
    "Discover the power of nested loops - putting loops inside loops to create complex patterns from simple shapes.",
  sections: [
    {
      kind: "Information",
      id: "nested-intro",
      title: "Beyond Single Shapes",
      content: [
        {
          kind: "text",
          value:
            "You've learned to draw individual shapes with loops. But what if you want to draw multiple shapes arranged in a pattern? For example, what if you want to draw eight squares arranged in a circle, or five triangles in a row?\n\nWhenever there's a repeating pattern of patterns, you should think of using **nested loops**. A nested loop is simply a loop inside another loop. The inner loop completes ALL its repetitions before the outer loop continues to its next repetition. The outer loop can position or rotate, while the inner loop draws the shape.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "PRIMM",
      id: "first-nested-primm" as SectionId,
      title: "Your First Nested Loop",
      content: [
        {
          kind: "text",
          value:
            'Let\'s start with something visual. The program below has two loops - one "inside" the other. The indentation shows which loop is "inside" which. Use the comments to help you predict what this program will draw:',
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\n# Outer loop: repeat 6 times\ndef make_shape():\n    for i in range(6):\n        # Inner loop: repeat 4 times\n        for j in range(4):\n            turtle.forward(50)\n            turtle.right(90)\n\n        # After inner loop completed, rotate\n        turtle.right(60)\n\nmake_shape()\n",
      },
      predictPrompt:
        "The inner loop draws a shape. The outer loop repeats this shape several times, rotating 60 degrees each time. What pattern will this create?",
      conclusion:
        "The inner loop completes a full square, then the turtle rotates 60 degrees, and the process repeats. Since 6 (loops) x 60 (degrees) = 360 (degrees), the squares form a complete circle.",
    } as PRIMMSectionData,
    {
      kind: "MultipleChoice",
      id: "loop-counting",
      title: "Counting Loop Iterations",
      content: [
        {
          kind: "text",
          value:
            'Loops are "nested" when one loop is "inside" another. Nested loops can do very complex things because there is a multiplicative effect. For example, in the program above there are two loops: the outer loop runs six times and the inner loop runs 4 times. This means that the code "within" the inner loop runs 6 x 4 = 24 times.\n\nNow that you know about the multiplicative effect, look at the program below. Given that the `turtle.forward` is inside two loops - one nested inside the other - how many times total does the `turtle.forward()` function get called?',
        },
        {
          kind: "code",
          value:
            "import turtle\ndef make_shape():\n    for i in range(3):\n        for j in range(4):\n            turtle.forward(50)",
        },
      ],
      options: ["3 times", "4 times", "7 times", "12 times"],
      correctAnswer: 3,
      feedback: {
        correct:
          "Correct! The outer loop runs 3 times, and for EACH of those times, the inner loop runs 4 times. So 3 x 4 = 12 total `forward()` calls.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Debugger",
      id: "debug-nesting" as SectionId,
      title: "Watching Nested Loops",
      content: [
        {
          kind: "text",
          value:
            "Let's slow down and watch how nested loops actually work with just some simple print statements. Step through this code and pay attention to:\n- The inner loop completing fully before the outer loop continues\n- The fact that the `Hi from the inner loop` line is printed 2 x 3 = 6 times\n- How the `print()` statements around the inner loop only run twice each",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'def run_loops():\n    print("About to start program")\n\n    for i in range(2):\n        print("About to run inner loop")\n        for j in range(3):\n            print("Hi from the inner loop")\n        print("Done inner loop")\n\n    print("All done program")\n\nrun_loops()',
      },
    } as DebuggerSectionData,
    {
      kind: "MultipleChoice",
      id: "indentation-understanding",
      title: "Indentation in Nested Loops",
      content: [
        {
          kind: "text",
          value:
            "Look at this code carefully. Why is `turtle.forward(60)` indented three times?",
        },
        {
          kind: "code",
          value:
            "def make_shape():\n    for i in range(12):\n        for j in range(4):\n            turtle.forward(60)\n            turtle.right(90)\n        turtle.right(30)",
        },
      ],
      options: [
        "Python requires double indentation for code not in a function",
        "The forward command is inside both loops",
        "Double indentation makes the turtle go faster",
        "It's a mistake — it should only be indented once",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          'Exactly! Each level of indentation shows code is "inside" another structure. The forward(60) is inside the inner loop, which is inside the outer loop, which is inside the function—three levels total.',
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Observation",
      id: "flower-pattern" as SectionId,
      title: "Creating Flower Patterns",
      content: [
        {
          kind: "text",
          value:
            "Nested loops are perfect for creating flower patterns. The inner loop draws one petal, and the outer loop arranges multiple petals in a circle. Run this code and then try changing the numbers to see different flowers.\n\nOne thing to note is that the code uses `turtle.speed(0)` to make the turtle run at maximum speed.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\nturtle.speed(0)\n\ndef draw_flower():\n    for i in range(12):\n        # Draw one petal (square)\n        for j in range(4):\n            turtle.forward(60)\n            turtle.right(90)\n\n        # Rotate for next petal\n        turtle.right(30)  # 360/12 = 30\n\ndraw_flower()\n",
      },
    } as ObservationSectionData,
    {
      kind: "Testing",
      id: "shape-ring" as SectionId,
      title: "Challenge: Shape Ring",
      content: [
        {
          kind: "text",
          value:
            "Create a ring of shapes using nested loops:\n\n1. Draw 8 triangles arranged in a circle\n2. Each triangle should have sides of 30 pixels\n3. Remember: triangles use 120 degree exterior angles\n4. The triangles should be evenly spaced: 360 (degrees) / 8 (loops) = 45 (degrees)",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\nturtle.speed(0)\n\n# Draw 8 triangles in a circle\n# Your code here\n",
      },
      testMode: "procedure",
      functionToTest: "__main__",
      visualThreshold: 0.999,
      testCases: [
        {
          description: "8 triangles arranged in a circle",
          input: [],
          expected: null,
          referenceImage: "images/turtle_ring_triangles_8.png",
        },
      ],
    } as TestingSectionData,
    {
      kind: "MultipleSelection",
      id: "nesting-concepts",
      title: "Understanding Nested Loops",
      content: [
        {
          kind: "text",
          value:
            "Which of these statements about nested loops are true? Select all that apply.",
        },
      ],
      options: [
        "The inner loop completes all its iterations before the outer loop continues",
        "The code inside the inner loop runs (outer x inner) times",
        "Nested loops can only be used for drawing shapes",
        "Indentation shows which loop is inside which",
      ],
      correctAnswers: [0, 1, 3],
      feedback: {
        correct:
          "Perfect! Nested loops are powerful tools for creating patterns within patterns. They work for any repetitive task, not just drawing.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Testing",
      id: "pentagon-flower" as SectionId,
      title: "Challenge: Pentagon Flower",
      content: [
        {
          kind: "text",
          value:
            "Now create a more complex flower pattern:\n\n1. Draw a flower with 5 pentagon petals\n2. Each pentagon should have 5 sides of 40 pixels each\n3. Remember: pentagons turn 72° at each corner\n4. The petals should be evenly spaced around the center: 360 (degrees) / 5 (loops) = 72 (degrees)\n\nHint: You'll need a loop inside a loop — the outer loop arranges the petals and the inner loop draws each pentagon.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\nturtle.speed(0)\n\n# Draw a flower with 5 pentagon petals\n# Your code here\n",
      },
      testMode: "procedure",
      functionToTest: "__main__",
      visualThreshold: 0.999,
      testCases: [
        {
          description: "5 pentagons arranged in a flower pattern",
          input: [],
          expected: null,
          referenceImage: "images/turtle_pentagon_flower.png",
        },
      ],
    } as TestingSectionData,
    {
      kind: "PRIMM",
      id: "rotation-pattern-primm" as SectionId,
      title: "Rotating Pattern",
      content: [
        {
          kind: "text",
          value:
            "Here's a mesmerizing pattern created with nested loops. The outer loop rotates the entire drawing angle slightly each time:",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\ndef make_flower():\n    turtle.speed(0)\n\n    for i in range(8):\n        # Draw one square\n        for j in range(4):\n            turtle.forward(70)\n            turtle.right(90)\n\n        # Rotate slightly for next square\n        turtle.right(45)  # 360 / 8 = 45\n\nmake_flower()",
      },
      predictPrompt:
        "Each iteration draws a complete square, then rotates 45 degrees. With 8 iterations and 45 degrees each time, what will the final pattern look like?",
      conclusion:
        "It creates a beautiful rotating square pattern! The squares overlap to create an 8-pointed star design. This technique of slight rotations can create amazing geometric art.",
    } as PRIMMSectionData,
    {
      kind: "Testing",
      id: "custom-mandala" as SectionId,
      title: "Challenge: Create a Snowflake",
      content: [
        {
          kind: "text",
          value:
            "Time to create your own snowflake using nested loops! Requirements:\n\n1. A big 8-armed starburst drawn by the outer loop (100 pixels)\n2. Smaller 6-sided starbursts at the end of every arm (20 pixels)\n\nIt's best to think of solving this problem in two stages. First, try and get the outer loops with its eight arms working. Then, worry about the inner loop.",
        },
      ],
      example: {
        visualization: "turtle",
        initialCode:
          "import turtle\n\nturtle.speed(0)\n\n# Create your snowflake here\n",
      },
      testMode: "procedure",
      functionToTest: "__main__",
      visualThreshold: 0.999,
      testCases: [
        {
          description: "8-armed snowflake with 6-sided starbursts at each tip",
          input: [],
          expected: null,
          referenceImage: "images/turtle_snowflake_example.png",
        },
      ],
    } as TestingSectionData,
    {
      kind: "Information",
      id: "nested-conclusion",
      title: "Conclusion",
      content: [
        {
          kind: "text",
          value:
            "Amazing work! You've unlocked the power of nested loops and discovered how patterns within patterns create complexity from simplicity. You learned:\n- Inner loops complete fully before outer loops continue\n- Two loops multiply their repetitions (outer x inner total iterations)\n- Rotation in the outer loop + shapes in the inner loop = circular patterns\n\nIn the next lesson, you'll explore a different kind of pattern: what if shapes need to be arranged in rows and columns instead of circles? You'll learn how to position shapes in grids and create even more complex designs.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
