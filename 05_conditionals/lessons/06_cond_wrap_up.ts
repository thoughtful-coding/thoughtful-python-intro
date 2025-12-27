import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  MultipleChoiceSectionData,
  MultipleSelectionSectionData,
  TestingSectionData,
  MatchingSectionData,
  CoverageSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Conditionals Unit Challenge",
  guid: "f6g7h8i9-8c9d-5e6f-0a1b-6h7i8j9k0l1m" as LessonId,
  description:
    "Test your understanding of conditionals plus everything from previous units through interleaved practice.",
  sections: [
    {
      kind: "Information",
      id: "wrap-up-intro",
      title: "Bringing Everything Together",
      content: [
        {
          kind: "text",
          value:
            "Over the past lessons, you've learned how to make your programs make decisions:\n- Single `if` statements for optional code\n- Multiple `if` statements for independent checks\n- `if/else` for choosing between two paths\n- `elif` for choosing among many paths\n- Boolean operators (`and`, `or`) for combining conditions\n\nAs always, this wrap-up uses **interleaving** to mix conditionals with everything you've learned in previous units: variables, data types, f-strings, and functions. By switching between concepts, your brain actively recalls and connects ideas rather than following a single pattern.\n\nTake your time with each question. These are designed to be challenging!",
        },
      ],
    } as InformationSectionData,
    {
      kind: "MultipleChoice",
      id: "variables-in-conditionals",
      title: "Variables Change Inside Conditionals",
      content: [
        {
          kind: "text",
          value:
            "An important concept: variables can change inside conditionals, and those changes persist afterward. The code below updates a variable inside an if statement. What will this print?",
        },
        {
          kind: "code",
          value: 'x = 10\nif x > 5:\n    x = x + 3\nprint(f"Result: {x}")',
        },
      ],
      options: ["Result: 10", "Result: 13", "Result: 8", "Result: x + 3"],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! The condition x > 5 is True (10 > 5), so x gets updated to 10 + 3 = 13. That change persists after the if statement, so the print shows 13.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleSelection",
      id: "data-types-comparisons",
      title: "Data Types and Comparisons",
      content: [
        {
          kind: "text",
          value:
            "Understanding how data types interact with comparisons is crucial. Remember: strings and integers behave differently, and Python is very particular about data types. Select all statements that are True:",
        },
      ],
      options: [
        "`5 > 3`",
        '`"5" == 5`',
        "`5 == 5`",
        '`"hello" == "hello"`',
        '`"Hello" == "hello"`',
      ],
      correctAnswers: [0, 2, 3],
      feedback: {
        correct:
          'Perfect! Integers compare numerically (`5 > 3`). Strings compare alphabetically (`"5" > "3"`). But you cannot compare different types (`"5" == 5` is False).',
      },
    } as MultipleSelectionSectionData,
    {
      kind: "Coverage",
      id: "access-coverage" as SectionId,
      title: "Function with AND Condition",
      content: [
        {
          kind: "text",
          value:
            "After reviewing data types, let's practice with functions and Boolean operators. This function checks two conditions with `and`. Provide input combinations that produce each output:",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'def check_access(age, has_id):\n  if age >= 21 and has_id:\n    print("Enter")\n  else:\n    print("Access denied")',
      },
      testMode: "procedure",
      functionToTest: "check_access",
      coverageTable: {
        columns: [
          { variableName: "age", variableType: "number" },
          { variableName: "has_id", variableType: "boolean" },
        ],
        rows: [
          {
            fixedInputs: {},
            expectedOutput: "Enter",
            hint: "Must be 21+ AND have ID",
          },
          {
            fixedInputs: { age: 22 },
            expectedOutput: "Access denied",
            hint: "Old enough but no ID",
          },
          {
            fixedInputs: { has_id: true },
            expectedOutput: "Access denied",
            hint: "Has ID but too young",
          },
        ],
      },
    } as CoverageSectionData,
    {
      kind: "MultipleChoice",
      id: "multiple-ifs-vs-elif",
      title: "Multiple Ifs vs Elif",
      content: [
        {
          kind: "text",
          value:
            "Conditionals are tricky. There's lots of rules and things to remember. One of the most common sources of confusion is that multiple `if` statements check ALL conditions independently, while `elif` chains stop at the FIRST True condition. This changes how many messages can print.\n\nConsider two versions of a score checker. Version A uses multiple ifs, Version B uses elif. For score = 85, how many milestone messages print in Version A vs Bersion B?",
        },
        {
          kind: "code",
          value:
            'def version_a(score):\n    if score > 90:\n        print("Outstanding!")\n    if score > 80:\n        print("Excellent!")\n    if score > 70:\n        print("Good!")\n\ndef version_b(score):\n    if score > 90:\n        print("Outstanding!")\n    elif score > 80:\n        print("Excellent!")\n    elif score > 70:\n        print("Good!")',
        },
      ],
      options: [
        "Version A: 0 messages, Version B: 0 messages",
        "Version A: 1 message, Version B: 1 message",
        "Version A: 2 messages, Version B: 1 message",
        "Version A: 2 messages, Version B: 2 messages",
      ],
      correctAnswer: 2,
      feedback: {
        correct:
          'Correct! Version A checks ALL conditions: 85 > 90? No. 85 > 80? Yes (print "Excellent!"). 85 > 70? Yes (print "Good!"). Two messages total. Version B stops at the first True: 85 > 90? No. 85 > 80? Yes (print "Excellent!"), then stops. One message.',
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Matching",
      id: "fstrings-in-conditionals" as SectionId,
      title: "F-Strings in Conditionals",
      content: [
        {
          kind: "text",
          value:
            "F-strings are especially useful in conditionals because they let you create dynamic messages based on the data. The function below uses f-strings to report different temperature conditions. Match each temperature to its output:",
        },
        {
          kind: "code",
          value:
            'def report_temp(temp):\n    if temp < 0:\n        print(f"{temp} degrees is freezing!")\n    elif temp < 20:\n        print(f"{temp} degrees is cold")\n    else:\n        print(f"{temp} degrees is warm")',
        },
      ],
      prompts: [
        { "report_temp(-5)": '"-5 degrees is freezing!"' },
        { "report_temp(10)": '"10 degrees is cold"' },
        { "report_temp(25)": '"25 degrees is warm"' },
        { "report_temp(0)": '"0 degrees is cold"' },
      ],
      feedback: {
        correct:
          "Excellent! F-strings let you insert the actual temperature value into different messages depending on which condition is True. Notice that 0 is NOT less than 0, so it goes to the elif!",
      },
    } as MatchingSectionData,
    {
      kind: "Testing",
      id: "grade-reporter" as SectionId,
      title: "Challenge: Grade Reporter",
      content: [
        {
          kind: "text",
          value:
            "Create a function `report_grade(name, score)` that assigns letter grades and reports them using f-strings:\n\n- If score >= 90: print '[name] earned an A with score [score]'\n- Elif score >= 80: print '[name] earned a B with score [score]'\n- Elif score >= 70: print '[name] earned a C with score [score]'\n- Elif score >= 60: print '[name] earned a D with score [score]'\n- Else: print '[name] earned an F with score [score]'\n\nThis combines functions, elif chains, f-strings, and proper ordering!",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'def report_grade(name, score):\n    # Check score ranges from highest to lowest\n    # Use f-strings for output\n    pass\n\n# Test your function\nreport_grade("Alice", 95)\nprint("---")\nreport_grade("Bob", 82)\nprint("---")\nreport_grade("Charlie", 58)',
      },
      testCases: [
        {
          input: ["Alice", 95],
          expected: "Alice earned an A with score 95",
          description: "Test A grade",
        },
        {
          input: ["Bob", 82],
          expected: "Bob earned a B with score 82",
          description: "Test B grade",
        },
        {
          input: ["Diana", 75],
          expected: "Diana earned a C with score 75",
          description: "Test C grade",
        },
        {
          input: ["Eve", 65],
          expected: "Eve earned a D with score 65",
          description: "Test D grade",
        },
        {
          input: ["Charlie", 58],
          expected: "Charlie earned an F with score 58",
          description: "Test F grade",
        },
      ],
      testMode: "procedure",
      functionToTest: "report_grade",
    } as TestingSectionData,
    {
      kind: "MultipleSelection",
      id: "boolean-operators-evaluation",
      title: "Boolean Operator Evaluation",
      content: [
        {
          kind: "text",
          value:
            'Understanding how Boolean operators evaluate is key to writing correct conditions. Given `age = 16` and `role = "student"`, select all conditions that evaluate to True:',
        },
      ],
      options: [
        "`age >= 18`",
        "`age < 18`",
        '`age == 13 and role == "student"`',
        '`age >= 18 or role == "student"`',
        "`age >= 13 and age < 18`",
        '`age >= 18 and role == "student"`',
      ],
      correctAnswers: [1, 3, 4],
      feedback: {
        correct:
          "Perfect! Tracking all of the values can be difficult, so take your time and be careful.",
      },
    } as MultipleSelectionSectionData,
    {
      kind: "MultipleChoice",
      id: "function-behavior",
      title: "Functions with Different Behaviors",
      content: [
        {
          kind: "text",
          value:
            "In previous units, you learned that functions can take inputs and produce outputs. When you add conditionals to functions, the same function can behave completely differently depending on the input.\n\nLook at this function that categorizes numbers. What makes this function particularly useful?",
        },
        {
          kind: "code",
          value:
            'def categorize(num):\n    if num < 0:\n        print("Negative")\n    elif num == 0:\n        print("Zero")\n    else:\n        print("Positive")',
        },
      ],
      options: [
        "It always prints the same thing",
        "It can produce three different outputs from one function",
        "It doesn't use any variables",
        "It only works with integers",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! This is the power of conditionals in functions: the SAME function can produce different outputs based on the input. One function, multiple behaviors!",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "MultipleChoice",
      id: "elif-order-bug",
      title: "Spot the Bug: Condition Order",
      content: [
        {
          kind: "text",
          value:
            "A student wrote this function to assign shipping costs based on package weight. They tested it with a 25-pound package and expected to see 'Medium: $10' but instead got 'Light: $5'. What's wrong?",
        },
        {
          kind: "code",
          value:
            'def shipping_cost(weight):\n    if weight > 5:\n        print("Light: $5")\n    elif weight > 20:\n        print("Medium: $10")\n    elif weight > 50:\n        print("Heavy: $20")\n    else:\n        print("Free shipping!")',
        },
      ],
      options: [
        "The `else` should come before the `elif`s",
        "The conditions are in the wrong order - larger thresholds should be checked first",
        "The function should use multiple `if` statements instead of `elif`",
        "The `>` operator should be `>=` instead",
      ],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! A 25-pound package matches `weight > 5` (the first condition), so Python never checks the others. The conditions should be ordered from highest to lowest: check `> 50` first, then `> 20`, then `> 5`. Remember: with elif chains, the FIRST True condition wins!",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "Testing",
      id: "password-validator" as SectionId,
      title: "Challenge: Password Validator",
      content: [
        {
          kind: "text",
          value:
            'Create a function `validate_password(password, username)` that checks if a password is valid:\n\n1. Passwords must be at least 8 characters long\n2. Passwords must be at most 16 characters\n3. Password must contain the username\n\nIf ALL conditions pass, print `"Password is valid"`\nIf ANY condition fails, print `"Password is invalid"`\n\nHints:\n- Use `len(password)` for length\n- Use `in` to check for substrings\n- Use `and` to require all three conditions',
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'def validate_password(password, username):\n    # Check: length and substrings \n    pass\n\n# Test your function\nvalidate_password("alice_is_cool", "alice")\nprint("---")\nvalidate_password("i_bob", "bob")\nprint("---")\nvalidate_password("chuck_is_cool", "charlie")\nprint("---")\nvalidate_password("verylongpassword_diana_password", "diana")',
      },
      testCases: [
        {
          input: ["alice_is_cool", "alice"],
          expected: "Password is valid",
          description: "Valid password",
        },
        {
          input: ["i_bob", "bob"],
          expected: "Password is invalid",
          description: "Too short",
        },
        {
          input: ["chuck_is_cool", "charlie"],
          expected: "Password is invalid",
          description: "Missing username",
        },
        {
          input: ["verylongpassword_diana_password", "diana"],
          expected: "Password is invalid",
          description: "Too long",
        },
      ],
      testMode: "procedure",
      functionToTest: "validate_password",
    } as TestingSectionData,
    {
      kind: "Matching",
      id: "when-to-use-what" as SectionId,
      title: "Choosing the Right Structure",
      content: [
        {
          kind: "text",
          value:
            "You've learned multiple conditional structures, and knowing WHEN to use each one is crucial. Understanding the problem tells you which structure to use. Match each scenario to the appropriate conditional structure:",
        },
      ],
      prompts: [
        {
          "Assign one of five letter grades (A, B, C, D, F)":
            "elif chain (mutually exclusive choices)",
        },
        {
          "Check password length, special characters, and strength independently":
            "Multiple if statements (independent checks)",
        },
        {
          "Entry requires age 18+ AND valid ticket": "Single if with and",
        },
        {
          "Discount for students OR seniors": "Single if with or",
        },
        {
          "Say 'even' or 'odd' for any number": "if/else (exactly two options)",
        },
      ],
      feedback: {
        correct:
          "Excellent! Choosing the right structure makes your code clearer and prevents bugs. elif for one-of-many, multiple ifs for independent checks, if/else for binary choices, and Boolean operators to combine conditions!",
      },
    } as MatchingSectionData,
    {
      kind: "Information",
      id: "wrap-up-conclusion",
      title: "Congratulations!",
      content: [
        {
          kind: "text",
          value:
            "Excellent work! You've mastered conditionals and demonstrated how they integrate with everything you've learned: variables, data types, f-strings, and functions. Your programs can now make intelligent decisions based on data. They can check conditions, choose between paths, and respond differently to different inputs.\n\nIn the next unit, we'll cover the final major topic in programming: loops. Loops let your programs repeat code efficiently, and they're the final piece you need to write truly powerful programs. Get ready!",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
