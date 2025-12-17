import type {
  DebuggerSectionData,
  InformationSectionData,
  Lesson,
  LessonId,
  MatchingSectionData,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  PRIMMSectionData,
  ReflectionSectionData,
  SectionId,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Inputs to Functions",
  guid: "ab5bed79-7662-423e-90ef-952539f59099" as LessonId,
  description: "Learn how to make functions more flexible with inputs",
  sections: [
    {
      kind: "Information",
      id: "function-refresher",
      title: "Function Refresher",
      content: [
        {
          kind: "text",
          value:
            'In the previous lesson, you dug into how functions help make your code more compact by removing repetition. Finding these types of patterns is critical for making your programs easier to read and understand. The only trouble with the functions we showed you is that they did the same thing every time they ran. In this lesson, you\'ll learn how to make functions "customizable" to different situations.',
        },
      ],
    } as InformationSectionData,
    {
      kind: "PRIMM",
      id: "primm-greet-person-function" as SectionId,
      title: "Functions with Inputs",
      content: [
        {
          kind: "text",
          value:
            "Below is some Python code that **defines** and **calls** the `greet_person()` function. There are two key differences between this function and the one you've seen before:\n1. There is a variable between the parentheses in the function definition\n2. There are values between the parentheses in the function calls\n\nPredict what the code below will output, then run it to check your prediction.",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'def greet_person(name):\n  print("Hello there " + name + "!")\n\ngreet_person("Ben")\ngreet_person("Meg")\n',
      },
      predictPrompt: "What do you think will happen when you run the code?",
      conclusion: `Calling a function with different "inputs" allows them to mold to the situation.`,
    } as PRIMMSectionData,
    {
      kind: "MultipleChoice",
      id: "variable-reassignment",
      title: "Input Values",
      content: [
        {
          kind: "text",
          value: `As you saw above, you can pass different values (inputs) to a function and have the function act differently. What happens is the following:\n1. You define the function with \`def\` and the name of the function\n2. Inside the parentheses, you state the variables the function should take (called parameters)\n3. You call the function, passing the value the function should use via the call (called arguments)\n\nBased on what you observed in the previous section, what will be printed out if you call the function with the code \`greet_person("Bill")\`?`,
        },
      ],
      options: [
        "`Hello there + name + !`",
        "`Hello there Bill!`",
        "`greet_person(name)`",
        "`Hello there name!`",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          'Correct! The value `"Bill"` gets stored in the functions `name` parameter',
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Information",
      id: "function-pieces",
      title: "Function Parts",
      content: [
        {
          kind: "text",
          value:
            'Let\'s revisit the parts of a function from the previous lesson... mostly because we lied to you a bit. There\'s really **five** pieces:\n1. `def` starts "defining" the function\n2. `greet_person` is name of the function\n3. The **parameters** are variable inside the parentheses, waiting to be set by the function call\n4. The indented code below the `def greet_person(name):` is the code the function will run\n5. The unindented `greet_person()` "calls" the function with particular **arguments**',
        },
      ],
    } as InformationSectionData,
    {
      kind: "Matching",
      id: "matching-function-pieces" as SectionId,
      title: "Matching Function Parts",
      content: [
        {
          kind: "text",
          value:
            "Knowing that there are five core parts of a function, match up the pieces of the function below with its value in the code.",
        },
        {
          kind: "code",
          value:
            'def favorite(animal):\n  val = "My favorite animal is a " + animal + "!"\n  print(val)\n\nfavorite("cat")',
        },
      ],
      prompts: [
        { "Function name": "favorite" },
        { "Function parameter": "animal" },
        { "Function argument": '"cat"' },
      ],
    } as MatchingSectionData,
    {
      kind: "Debugger",
      id: "variable-debugging" as SectionId,
      title: "Watching Variables Change",
      content: [
        {
          kind: "text",
          value:
            "Let's dive into how a function call with parameters and arguments work. Below is a small program where we greet Bill with three different phrases. Step through each line of the program. The most important thing to notice is every time a function is called, the argument of the function call gets stored into the function's `phrase` parameter. In total, you go in and out of the function three times, each time with the parameter being set to a different argument.",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'def greet_bill(phrase):\n    print(phrase + " Bill!")\n\ngreet_bill("Yo")\ngreet_bill("What up")\ngreet_bill("Hi")\nprint("All done")',
      },
      advancedControls: false,
    } as DebuggerSectionData,
    {
      kind: "MultipleChoice",
      id: "problem-function-input-1-question",
      title: "Single Input, What's the Output?",
      content: [
        {
          kind: "text",
          value: "What would the following program print out?",
        },
        {
          kind: "code",
          value:
            "def math_stuff(x):\n    y = x + x\n    print(y + 1)\n\nmath_stuff(7)",
        },
      ],
      options: ["9", "10", "13", "15"],
      correctAnswer: 3,
      feedback: {
        correct: "Correct!",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleChoice",
      id: "problem-function-input-2-question",
      title: "Multiple Inputs, What's the Output?",
      content: [
        {
          kind: "text",
          value:
            "Functions aren't limited to a single parameter between the parentheses. You can actually use as many as you would like. For example, in the program below, the function has three parameters: `x`, `y`, and `z` input variables . The **function call** then provides three arguments for these input variables:\n- `5` -> `x`\n- `2` -> `y`\n- `3` -> `z`.\n\nBased on this explanation, what would the following program print out?",
        },
        {
          kind: "code",
          value:
            "def math_stuff(x, y, z):\n    a = x * y * z\n    print(a)\n\nmath_stuff(5, 2, 3)",
        },
      ],
      options: ["13", "15", "30", "100"],
      correctAnswer: 2,
      feedback: {
        correct: "Correct!",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleSelection",
      id: "function-param-arg-question",
      title: "Function Facts",
      content: [
        {
          kind: "text",
          value:
            "All of the different terminology that is used to describe the different parts of functions can be confusing. It's important to understand the fundamental concepts, however, and then build from there.\n\nAt their core, functions are repeated bits of code. If they run the same way each time they are called, then they don't take any parameters/arguments. You can add parameters/arguments if you want to allow the function to be more general and do different things. Parameters are the variables inside the parentheses in the function definition. Arguments are the values put inside a function call that a particular function call will use.\n\nBased on this explanation, analyze the code below. Select all the true statements.",
        },
        {
          kind: "code",
          value:
            'def say_stuff(name, age, home):\n    print(f"Say hi to {name}!")\n    print(f"{name} is {age} years old and lives in {home}")\n\nval_1 = "Ben"\nval_2 = 13\nval_3 = "New York"\nsay_stuff(val_1, val_2, val_3)\n',
        },
      ],
      options: [
        "The function `say_stuff` has four parameters",
        'One of the parameters to `say_stuff` is "New York"',
        'One of the arguments to `say_stuff` is "New York"',
        "One of the function parameters is named `home`",
        "One of the function arguments is named `age`",
      ],
      correctAnswers: [2, 3],
      feedback: {
        correct: "Correct!",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Reflection",
      id: "function-with-inputs-reflection" as SectionId,
      title: "Functions With Inputs Reflection",
      content: [
        {
          kind: "text",
          value:
            'Having functions with input variables allows them to become much more useful. This, in turn, means that they provide you with many more opportunities to "fold" your program: assuming you can find the repeating patterns. \n\nNow it\'s time to reflect to formalize your knowledge. Create a simple 3-4 line code example that demonstrates how a function with one (or multiple) input variables works and then write 3-4 sentences explaining how your program works. Remember to use the phrase "as seen in the example".',
        },
      ],
      topic: "Functions With Inputs",
      isTopicPredefined: true,
      code: "Create an example showing the definition and calling of a function that takes input(s)",
      isCodePredefined: false,
      explanation: "Explain how the code in example works (3-4 sentences)",
      isExplanationPredefined: false,
    } as ReflectionSectionData,
    {
      kind: "Information",
      id: "functions-conclusion",
      title: "Conclusion",
      content: [
        {
          kind: "text",
          value:
            "Congratulations on learning about functions! You now understand how to define and call your own functions. Identifying places where you can create and use functions is one of the core parts of being a programmer.\n\nOver the previous three lessons, you've learned some of the most important concepts in programming. They will come up over and over again. In the next lesson, we'll pause and test ourselves on everything we've learned so far.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
