import type {
  CoverageSectionData,
  CoverageTableRow,
  InformationSectionData,
  InputParam,
  Lesson,
  LessonId,
  MatchingSectionData,
  MultipleChoiceSectionData,
  SectionId,
  TestingSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Function Unit Challenge",
  guid: "d6b6048d-ebb0-4ac8-9b06-60ad1134ef98" as LessonId,
  description:
    "Practice what you've learned so far in terms of data types, variables, and functions via interleaving.",
  sections: [
    {
      kind: "Information",
      id: "review-intro",
      title: "Practicing with Interleaving",
      content: [
        {
          kind: "text",
          value:
            "You've learned a lot in the past few lessons: how to create functions, how to call functions, and how to use function parameters and arguments. As with the previous review sections, this lesson uses **interleaving** to help solidify your understanding. By pulling in everything you've learned so far and asking questions about it in a mixed-up order, your brain will be able to make stronger connections between the concepts. Be sure to take your time and think carefully about each problem!",
        },
      ],
    } as InformationSectionData,
    {
      kind: "MultipleChoice",
      id: "type-error-identification",
      title: "Interpreting Type Errors",
      content: [
        {
          kind: "text",
          value: `Which line does the \`TypeError\` below identify as a problem:\n\`\`\`\nPyodide Execution Error: 
Execution Error: Traceback (most recent call last):
  File "/lib/python311.zip/_pyodide/_base.py", line 573, in eval_code_async
    await CodeRunner(
  File "/lib/python311.zip/_pyodide/_base.py", line 393, in run_async
    coroutine = eval(self.code, globals, locals)
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<exec>", line 31, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'\n\`\`\``,
        },
      ],
      options: ["line 31", "line 393", "line 573", "line 1"],
      correctAnswer: 0,
      feedback: {
        correct: "Correct!",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleChoice",
      id: "string-identification",
      title: "Identifying Strings",
      content: [
        {
          kind: "text",
          value:
            "Which of the following is **not** a valid string and would cause an error?",
        },
      ],
      options: [
        '"It\'s a beautiful day"',
        '"She said "hello" to me"',
        "'Hello, World'",
        '\' " " " " \'',
      ],
      correctAnswer: 1,
      feedback: {
        correct: "Correct!",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Matching",
      id: "ordering-function-pieces" as SectionId,
      title: "Function Pieces",
      content: [
        {
          kind: "text",
          value:
            "Match each part of the function that is being pointed at with its technical name.",
        },
        {
          kind: "image",
          src: "images/function_pieces.png",
          maxWidthPercentage: 70,
        },
      ],
      prompts: [
        { A: "Starts defining a function" },
        { B: "Function name" },
        { C: "Function parameters" },
        { D: 'Code "inside" function' },
        { E: "Function call" },
        { F: "Function arguments" },
      ],
    } as MatchingSectionData,
    {
      kind: "Coverage",
      id: "simple-add-coverage",
      title: "Different Inputs",
      content: [
        {
          kind: "text",
          value:
            "For functions that have parameters, you can control what functions output just by changing the arguments. The table below highlights this by asking you to provide the arguments that will produce different outputs. For each row of the table, provide the function argument that will produce the desired output.",
        },
      ],
      example: {
        visualization: "console",
        initialCode: "def do_math(x):\n    z = x + 3\n    print(z)\n\n",
      },
      testMode: "procedure",
      functionToTest: "do_math",
      coverageTable: {
        columns: [
          {
            variableName: "x",
            variableType: "number",
          } as InputParam,
        ],
        rows: [
          {
            fixedInputs: {},
            expectedOutput: "7",
            hint: "7 = ? + 3",
          } as CoverageTableRow,
          {
            fixedInputs: {},
            expectedOutput: "22",
            hint: "22 = ? + 3",
          } as CoverageTableRow,
          {
            fixedInputs: {},
            expectedOutput: "1",
            hint: "1 = ? + 3",
          },
        ],
      },
    } as CoverageSectionData,
    {
      kind: "MultipleChoice",
      id: "function-naming-1",
      title: "Function Naming",
      content: [
        {
          kind: "text",
          value:
            "Naming functions is a really important part of programming because it helps you understand what a function _does_. What would be a better name for the function in the program above?",
        },
      ],
      options: [
        "`subtract_negative()`",
        "`add_three()`",
        "`do_something()`",
        "`change_number()`",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! Using the function name `add_three` tells you exactly what the code inside does.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleChoice",
      id: "function-naming-2",
      title: "Function Naming Again",
      content: [
        {
          kind: "text",
          value:
            "Now knowing that proper naming of functions is important, what would be a better name for the `do_math()` function below?",
        },
        {
          kind: "code",
          value:
            "def do_math(num):\n    y = num * num\n    z = y * num\n    print(z)",
        },
      ],
      options: ["`double()`", "`quadruple()`", "`square()`", "`cube()`"],
      correctAnswer: 3,
      feedback: {
        correct:
          "Correct! The input is cubed because it is multiplied by itself three times.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Matching",
      id: "python-ops-match" as SectionId,
      title: "Matching Operations",
      content: [
        {
          kind: "text",
          value: "Match each of the following bits of code with their output:",
        },
      ],
      prompts: [
        { "4 + 7": "11" },
        { '"4" + "7"': '"47"' },
        { '4 + "7"': "TypeError: unsupported operand type(s) for +" },
        { "4 - 7": "-3" },
        { '4 - "7"': "TypeError: unsupported operand type(s) for -" },
      ],
    } as MatchingSectionData,
    {
      kind: "Coverage",
      id: "quad-coverage",
      title: "Different Inputs",
      content: [
        {
          kind: "text",
          value: "Provide inputs that will produce the desired output.",
        },
      ],
      example: {
        visualization: "console",
        initialCode: "def do_math(h, w):\n    z = h * w\n    print(z)\n\n",
      },
      testMode: "procedure",
      functionToTest: "do_math",
      coverageTable: {
        columns: [
          {
            variableName: "h",
            variableType: "number",
          } as InputParam,
          {
            variableName: "w",
            variableType: "number",
          } as InputParam,
        ],
        rows: [
          {
            fixedInputs: {},
            expectedOutput: "12",
            hint: "12 = ? * ?",
          } as CoverageTableRow,
          {
            fixedInputs: {},
            expectedOutput: "4",
            hint: "",
          } as CoverageTableRow,
          {
            fixedInputs: {},
            expectedOutput: "28",
            hint: "",
          },
        ],
      },
    } as CoverageSectionData,
    {
      kind: "MultipleChoice",
      id: "quad-naming-1",
      title: "Function Naming Again",
      content: [
        {
          kind: "text",
          value:
            "What would be a better name for the function in the program above?",
        },
      ],
      options: ["`get_height()`", "`add_numbers()`", "`square()`", "`area()`"],
      correctAnswer: 3,
      feedback: {
        correct:
          "Correct! `area` is a good name since we're multiplying height * width.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Testing",
      id: "multi-input-testing" as SectionId,
      title: "Challenge: Create a Two Input Function",
      content: [
        {
          kind: "text",
          value:
            "Create a function that takes two inputs, adds them together, and then prints their result. To be very precise, this is what inputs should lead to which outputs:\n- 2 and 2 prints 4\n- 4 and 2 prints 6\n- 4 and 1 prints 5\n- 2 and 6 prints 8",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          "def do_math(num_1, num_2):\n    # Your code here\n\ndo_math(2, 2)\ndo_math(4, 2)\ndo_math(4, 1)\ndo_math(6, 1)",
      },

      testCases: [
        {
          input: [2, 2],
          expected: "4",
          description: "Test 2, 2 -> 4",
        },
        {
          input: [4, 2],
          expected: "6",
          description: "Test 4, 2 -> 6",
        },
        {
          input: [4, 1],
          expected: "5",
          description: "Test 4, 1 -> 5",
        },
        {
          input: [2, 6],
          expected: "8",
          description: "Test 2, 6 -> 8",
        },
      ],
      testMode: "procedure",
      functionToTest: "do_math",
    } as TestingSectionData,
    {
      kind: "Information",
      id: "review-outro",
      title: "Wrapping Up Functions",
      content: [
        {
          kind: "text",
          value:
            "Great job! Functions are one of the most important concepts in programming. They allow you to think about creating something once and then use it over and over. This is a very powerful concept that, when taken to the extreme, allows for you to use **other people's code** to do things you could never do alone. In the next unit, we'll dive into how this works and start to create programs that can actually draw and create patterns.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
