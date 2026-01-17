import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  ObservationSectionData,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  PRIMMSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Functions Everywhere",
  guid: "ab95ab6a-a2ff-46af-b63c-1066b16fce49" as LessonId,
  description:
    "Discover how Python's built-in functions work and learn to use them to extend your programming power.",
  sections: [
    {
      kind: "Information",
      id: "functions-everywhere-intro",
      title: "Functions Everywhere",
      content: [
        {
          kind: "text",
          value:
            "In the previous unit you learned how to create and use your own functions, but you've actually been **using functions from the very beginning**: namely `print()`. The `print()` function's job is to display the arguments passed to it on the computer screen. \"Inside\" the `print()` function there's a lot of code, including calls to sub-functions that in turn call their own sub-sub-functions. In practice, a single call to `print()` results in millions of lines of code being run; layers upon layers of functions interact with the deepest parts of the computer to change individual pixels on your monitor.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "MultipleSelection",
      id: "function-uses-1",
      title: "Using Functions",
      content: [
        {
          kind: "text",
          value: "Why are functions so useful? Select all that apply.",
        },
      ],
      options: [
        "They let you reuse code without copying and pasting",
        "They make programs run faster",
        "They organize code into logical chunks",
        "They require less memory",
        "They allow you to build on existing functionality",
      ],
      correctAnswers: [0, 2, 4],
      feedback: {
        correct:
          "Correct! Functions help organize, reuse, and build upon existing code.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Information",
      id: "toolboxes-of-functions",
      title: "Toolboxes of Functions",
      content: [
        {
          kind: "text",
          value:
            'In addition to `print()`, Python provides hundreds of other functions. They are packaged into "libraries". You can think of libraries as specialized skillsets holding the skills that the computer knows how to do.\n\nThere are two steps in using a function (skill) from a library (skillset):\n1. **Import** the library so its functions are available to use\n2. **Use** one of the functions in the library',
        },
      ],
    } as InformationSectionData,
    {
      kind: "Observation",
      id: "random-library" as SectionId,
      title: "Using Libraries",
      content: [
        {
          kind: "text",
          value:
            "The first library we're going to experiment with is the `random` library. Randomness is a really common requirement in programming, which is why Python has many different random functions in the `random` library.\n\nThe first function from the `random` library we're going to use is the `randint()` function. Read the code below carefully and pay close attention to how the `random` library's `randint()` function is used. Then, run the code **several times** to see how a new, random integer is generated every time.",
        },
      ],
      example: {
        visualization: "console",
        initialCode: "import random\n\nx = random.randint(1, 10)\nprint(x)",
      },
    } as ObservationSectionData,
    {
      kind: "MultipleChoice",
      id: "import-random-purpose",
      title: "Importing Libraries",
      content: [
        {
          kind: "text",
          value:
            "Based on what you saw in the program above, what does the line `import random` do?",
        },
      ],
      options: [
        "Creates a random number immediately for the program to use",
        "Makes the random library's functions available",
        "Prints random text to the screen",
        "Generates a random error for the user to debug",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! Import makes all the functions in the random library available for you to use in your program.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleChoice",
      id: "randint-inputs",
      title: "Function Inputs",
      content: [
        {
          kind: "text",
          value:
            "Based on what you saw in the program above, how many arguments does the `random.randint()` function take?",
        },
      ],
      options: ["0", "1", "2", "3"],
      correctAnswer: 2,
      feedback: {
        correct:
          "Correct! `randint()` takes 2 inputs: the minimum value and the maximum value for the random number.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "PRIMM",
      id: "random-choice-primm" as SectionId,
      title: "Random Choices",
      content: [
        {
          kind: "text",
          value:
            "The `random` library has more functions than just `randint()`. Below is a program that uses a different random function called `choice()`. Predict what you think the code will output, then run it several times to check your prediction.",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'import random\n\ncards = "A23456789TJQK"\nchosen = random.choice(cards)\nprint(chosen)',
      },
      predictPrompt: "What do you think this program does?",
      conclusion:
        "The `random.choice()` function picks a random character from a string!",
    } as PRIMMSectionData,
    {
      kind: "Observation",
      id: "math-library" as SectionId,
      title: "Math Functions",
      content: [
        {
          kind: "text",
          value:
            "Python also provides a `math` library with advanced mathematical functions. Just like with `random`, you need to import the `math` library first. Once you've imported the library, you can use any one of the dozens of different advanced mathematical functions within it.\n\nRun the code below and observe what a few of the functions inside the `math` library do:",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          "import math\n\nprint(math.sqrt(16))\nprint(math.pow(2, 3))\nprint(math.floor(4.7))\nprint(math.ceil(4.2))",
      },
    } as ObservationSectionData,
    {
      kind: "PRIMM",
      id: "math-ceil-primm" as SectionId,
      title: "The Ceiling",
      content: [
        {
          kind: "text",
          value:
            "The small snippet of code below does two things. First, it imports the `math` library. Then it uses the `ceil()` function within the `math` library on a number with a decimal point. Predict what you think the code will output, then check your prediction.",
        },
      ],
      example: {
        visualization: "console",
        initialCode: "import math\n\nprint(math.ceil(4.2))",
      },
      predictPrompt: "What do you think this program does?",
      conclusion:
        "The `math.ceil()` function takes a number with a decimal point and rounds up to the nearest integer.",
    } as PRIMMSectionData,
    {
      kind: "Information",
      id: "library-conclusion",
      title: "Conclusion",
      content: [
        {
          kind: "text",
          value:
            "In this lesson, you've learned that functions aren't just things you create - they're everywhere in Python. From the simple `print()` statement to the powerful `random` and `math` libraries, functions let you perform complex operations without needing to write the logic yourself. No matter what library you're using, the pattern is always the same: import the library, then use its functions\n\nIn the next lesson, we'll explore a library called `turtle` that lets you create graphics by commanding a virtual turtle to move around the screen!",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
