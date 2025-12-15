import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  TestingSectionData,
  ReflectionSectionData,
  ParsonsSectionData,
  PRIMMSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Variable Errors",
  guid: "5d47da97-ba3d-4ef4-8dab-4f725190a69b" as LessonId,
  description:
    "Learn how to interpret errors that come up when using variables.",
  sections: [
    {
      kind: "Information",
      id: "name-errors-intro",
      title: "Introduction",
      content: [
        {
          kind: "text",
          value:
            "Using variables is necessary for pretty much all programs. Therefore, it's important to know how to handle errors that are \"raised\" when you accidentally use them incorrectly.\n\nAs stated in the previous lesson on `TypeErrors`, errors are one of the most common reasons new programmers feel overwhelmed. In this lesson, you'll learn to understand variable errors in order to make you a more confident, capable programmer.",
        },
      ],
    } as InformationSectionData,
    {
      kind: "PRIMM",
      id: "primm-name-errors" as SectionId,
      title: "Errors While Using Variables",
      content: [
        {
          kind: "text",
          value:
            "Below is what seems to be a fairly simple program that looks a lot like code you've seen previously. Unfortunately, there's a problem. First, predict what you think the problem is **and** what the code will do when you run it. Then, run the program to see if your prediction is correct. Remember, to be as specific as possible with your prediction; it will help you learn the content.",
        },
      ],
      example: {
        visualization: "console",
        initialCode: "number = 10\nprint(numbr)\n",
      },
      predictPrompt:
        "What is the problem and what will happen when you run the code?",
      conclusion:
        "`NameError` messages can be overwhelming! Read the next section for how to approach them.",
    } as PRIMMSectionData,
    {
      kind: "Information",
      id: "name-errors" as SectionId,
      title: "Variable Name Errors",
      content: [
        {
          kind: "text",
          value:
            'When you misspell a word in a string, you get a typo. When you misspell a variable name, you get a `NameError`. Luckily, `NameErrors` have the same format as the previous errors that we\'ve encountered; the key information is in the last two lines. Let\'s examine the `NameError` from the previous section carefully:\n```\nNameError: Traceback (most recent call last):\n  File "/lib/python311.zip/_pyodide/_base.py", line 573, in eval_code_async\n    await CodeRunner(\n  File "/lib/python311.zip/_pyodide/_base.py", line 393, in run_async\n    coroutine = eval(self.code, globals, locals)\n                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File "<exec>", line 2, in <module>\nNameError: name \'numbr\' is not defined\n```\nThe error is saying that the computer failed because it couldn\'t find a variable named `numbr` on line 2. This makes sense because the program misspelled the variable `number` that was created on the previous line.',
        },
      ],
    } as InformationSectionData,
    {
      kind: "Testing",
      id: "misspelling-errors" as SectionId,
      title: "Misspelled Variables",
      content: [
        {
          kind: "text",
          value:
            'The whole point of error messages is to give programmers enough information to fix any problems that pop up. Your goal in this section it to use the `NameError` that is "raised" by the computer to fix the misspelling in the simple program below.\n\nFirst, click the `Run Code` button to run the program. Then, carefully read the `NameError` that is raised to find and fix the bug - a misspelled variable - in the program. Finally, click the `Run Tests` button to verify you fixed it as expected.',
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          "var_a = 10\nvar_b = 11\nvar_c = var_b + van_a\nvar_z = var_a + var_b + var_c\nprint(var_z)",
      },
      testCases: [
        {
          input: [null],
          expected: "42",
          description: "Test don't get NameError",
        },
      ],
      testMode: "procedure",
      functionToTest: "__main__",
    } as TestingSectionData,
    {
      kind: "Parsons",
      id: "partial-program" as SectionId,
      title: "Different Error Types",
      content: [
        {
          kind: "text",
          value:
            'Computers will execute Python programs up until they hit an error. This means that you can end up with a program that partially works and then breaks in the middle.\n\nOrder the following lines of a program so that the program would print out `8`, `13` and then "raise" a `NameError`',
        },
      ],
      puzzle: {
        codeBlocks: [
          ["x = 8"],
          ["print(x)"],
          ["x = x + 4"],
          ["print(x + 1)"],
          ["x = x + y"],
        ],
        visualization: "console",
      },
      testMode: "procedure",
      functionToTest: "__main__",
      testCases: [
        {
          input: [null],
          expected: "8\n13\n\nNameError: name 'y' is not defined",
          description: "Test NameError",
        },
      ],
    } as ParsonsSectionData,
    {
      kind: "Information",
      id: "all-variable-pieces",
      title: "All the Pieces",
      content: [
        {
          kind: "text",
          value:
            'Hopefully, now you can fully appreciate how a computer actually works. A computer simply executes programs line-by-line Every time it sees a line with a `=`, it calculates the value of the stuff on the right and stores it into the variable on the left. Every time a variable is read, the computer accesses its memory for the value stored inside it. If a variable by that name hasn\'t been created before, then the computer "raises" a `NameError`. If the operation between the data isn\'t possible, then it "raises" a `TypeError`.\n\nThis is basically how your computer is working right now. It\'s executing billions of lines of code a second, reading values in memory and using those values to calculate new things. The overall effect is a machine that seamlessly responds to your clicks and keystrokes.',
        },
      ],
    } as InformationSectionData,
    {
      kind: "Reflection",
      id: "variables-errors-reflection" as SectionId,
      title: "Reflection: Reading Errors",
      content: [
        {
          kind: "text",
          value:
            'Using the information in errors to fix your code is the sign of a mature programmer. While verbose, errors messages contain a lot of information to help you figure out how to fix your program.\n\nNow it\'s time to reflect in order to formalize your knowledge. We have provided an example of `NameError` that might pop up during a program. Write 3-4 sentences explaining how to interpret the error message and what the error is that might have caused the problem. As always, remember to use the phrase "as seen in the example above".',
        },
      ],
      topic: "Reading Error Messages",
      isTopicPredefined: true,
      code: 'NameError: Traceback (most recent call last):\n  File "/lib/python311.zip/_pyodide/_base.py", line 573, in eval_code_async\n    await CodeRunner(\n  File "/lib/python311.zip/_pyodide/_base.py", line 393, in run_async\n    coroutine = eval(self.code, globals, locals)\n                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File "<exec>", line 25, in <module>\nNameError: name \'x\' is not defined\n',
      isCodePredefined: true,
      explanation:
        "Write 3-4 sentences explaining how to read an error message.",
      isExplanationPredefined: false,
    } as ReflectionSectionData,
    {
      kind: "Information",
      id: "variables-conclusion",
      title: "Conclusion",
      content: [
        {
          kind: "text",
          value:
            "Congratulations on learning about how to handle errors associated with variables! You have now seen all the things that variables can do. You understand how to set, read, and update a variable's value throughout your programs. You also understand what to do if/when errors arise.\n\nYou should feel proud. Over the previous four lessons, you've learned some of the most important concepts in programming. In the next lesson, we'll pause and test ourselves on everything we've learned so far.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
