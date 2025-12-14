import type {
  InformationSectionData,
  Lesson,
  LessonId,
  SectionId,
  PRIMMSectionData,
  MultipleChoiceSectionData,
  MatchingSectionData,
  MultipleSelectionSectionData,
  PredictionSectionData,
  ReflectionSectionData,
} from "../../../../src/types/data";

const lessonData: Lesson = {
  title: "Asking Questions About Strings",
  guid: "c5e8f0a1-6d7b-4c3e-8a90-1f2b3c4d5e6f" as LessonId,
  description:
    "Learn to use Python's built-in tools to ask questions about data, preparing you to write powerful if-statements.",
  sections: [
    {
      kind: "Information",
      id: "toolkit-intro",
      title: "Before You Decide, You Must Ask",
      content: [
        {
          kind: "text",
          value:
            'In this unit, you\'ll learn how to have your programs make decisions. Before we jump into this new topic, however, we\'re going to pause and have a "mini-unit" on how to use Python to ask questions about the data stored within programs. We\'re doing this because you can\'t create a program that decides "is this password valid?" unless you can first *ask questions* like: "How long is the password?" and "Does the password contain a capital letter?"\n\nThis lesson will let you explore Python\'s "question answering toolkit" - a set of built-in tools for inspecting your data.',
        },
      ],
    } as InformationSectionData,
    {
      kind: "PRIMM",
      id: "len-primm" as SectionId,
      title: "Tool 1: How Long Is It?",
      content: [
        {
          kind: "text",
          value:
            'The first element of our "question answering toolkit" is the `len()` function. It answers the question "How many characters are in this string?". Just like functions from the `math` library, the `len()` function *gives you back a number*. Let\'s see it in action.',
        },
        {
          kind: "image",
          src: "data/05_conditionals/images/len_function_diagram.png",
          alt: "A diagram showing 'Hello' going into a len() function and the number 5 coming out",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'x = len("Hi!")\ny = len("abc123")\nz = len("a b c")\nprint(f"{x}, {y}, {z}")',
      },
      predictPrompt:
        "What number will be printed out? Pay close attention to the last one!",
      conclusion:
        "It prints 3, 6, and 5. `len()` gives you back a *number* representing the total count of *all* characters, including spaces and punctuation.",
    } as PRIMMSectionData,
    {
      kind: "MultipleChoice",
      id: "len-quiz" as SectionId,
      title: "Check Your `len()` Knowledge",
      content: [
        {
          kind: "text",
          value: "What is the value of `len('Hi there!')`?",
        },
      ],
      options: ["8", "9", "10", "Hi there!"],
      correctAnswer: 1,
      feedback: {
        correct:
          "Correct! The characters are 'H', 'i', ' ', 't', 'h', 'e', 'r', 'e', '!', for a total of 9.",
      },
    } as MultipleChoiceSectionData,
    {
      kind: "PRIMM",
      id: "in-primm" as SectionId,
      title: "Tool 2: Is This in That?",
      content: [
        {
          kind: "text",
          value:
            'The `in` operator is the next member of our "question answering toolkit". It checks if one string is *inside* (aka a substring of) another string and gives back one of two special values: `True` or `False`.',
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'word = "apple"\n\nhas_a = "a" in word\nhas_A = "A" in word\nhas_pl = "pl" in word\n\nprint(f\'Has "a", {has_a}, Has "A", {has_A}, Has "pl", {has_pl}")',
      },
      predictPrompt:
        "What combination of `True` and `False` will the print statement output? Pay close attention to case sensitivity!",
      conclusion:
        "`in` gives back `True` if it finds the substring and `False` if it doesn't. It is case-sensitive!",
    } as PRIMMSectionData,

    {
      kind: "Matching",
      id: "in-matching" as SectionId,
      title: "Membership Check",
      content: [
        {
          kind: "text",
          value:
            "Given `text = 'Hello!'`, match each expression to its `True`/`False` result:",
        },
      ],
      prompts: [
        { "'H' in text": "True" },
        { "'h' in text": "False" },
        { "'lo' in text": "True" },
        { "' ' in text": "False" },
        { "'!' in text": "True" },
        { "'He' in text": "True" },
      ],
    } as MatchingSectionData,

    {
      kind: "PRIMM",
      id: "methods-primm" as SectionId,
      title: "Tool 3: What Kind of String Is This?",
      content: [
        {
          kind: "text",
          value:
            'The final member(s) of our "question answering toolkit" are the special functions that strings have "attached" to them. For example, we can ask questions of the string `"Hi"` by doing things like `"Hi".islower()`. This would be `False` since `"Hi"` has an uppercase `"H"`.\n\nThe fact that strings are similar to the `math` library in that you can access functions with a `.` is definitely a little surprising. There are functions hiding everywhere in Python (if you know where to look), but for now we\'re just going to limit it to three you\'ll have to remember: `.islower()`, `.isuppoer()` and `.isdigit()`.',
        },
        {
          kind: "image",
          src: "data/05_conditionals/images/string_method_syntax.png",
          alt: "Syntax diagram showing 'A'.isupper()",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'word = "HI"\n\nvar_1 = word.isupper()\nvar_2 = word.islower()\nvar_3 = word.isdigit()\n\nprint(f"isupper(), {var_1}, islower(), {var_2}, isdigit(), {var_3}")',
      },
      predictPrompt:
        "For each of the four `print` statements, predict the `True`/`False` output.",
      conclusion:
        "These methods let you ask specific questions. Notice that 'X' is uppercase, but it's *not* lowercase! `.isupper()`, `.islower()`, and `.isdigit()` are powerful tools for checking characters.",
    } as PRIMMSectionData,

    {
      kind: "MultipleSelection",
      id: "methods-quiz" as SectionId,
      title: "Check Your Method Knowledge",
      content: [
        {
          kind: "text",
          value:
            'Assume we set a variable with the line `text = "Hi 5"`. Given this, select all **three** expressions that would produce `True`:',
        },
      ],
      options: [
        "text.isupper()",
        "text.islower()",
        "text.isdigit()",
        "'i' in text",
        "len(text) == 4",
        '"5".isdigit()',
      ],
      correctAnswers: [3, 4, 5],
      feedback: {
        correct:
          "Correct! `text` itself is not all upper, all lower, or all digits.",
      },
    } as MultipleSelectionSectionData,

    {
      kind: "Prediction",
      id: "toolkit-prediction" as SectionId,
      title: "Practice Your Predictions",
      content: [
        {
          kind: "text",
          value:
            "Let's combine all three tools. This function `analyze_text` will be called with different inputs. Predict the `True`/`False` output for each check. This is exactly what you'll do in your head when writing `if` statements.",
        },
      ],
      example: {
        visualization: "console",
        initialCode:
          'def analyze_text(text):\n  var_a = len(text)\n  var_b = "a" in text\n  var_c = text.isupper()\n  print(f"{var_a}, {var_b}, {var_c}")\n',
      },
      testMode: "procedure",
      functionToTest: "analyze_text",
      predictionTable: {
        columns: [{ variableName: "text", variableType: "string" }],
        rows: [
          { inputs: ["Hello"] },
          { inputs: ["PASSWORD"] },
          { inputs: ["apple"] },
          { inputs: ["dry"] },
        ],
      },
    } as PredictionSectionData,

    {
      kind: "Reflection",
      id: "toolkit-reflection" as SectionId,
      title: "My New Toolkit",
      content: [
        {
          kind: "text",
          value:
            'You now have a completed your "question answering toolkit". You can check length of a string, you can see if one string is inside another string, and you can see the cases of the letters inside a string.\n\nNow it\'s time to reflect to formalize your knowledge. Create a 3-4 line example that uses *at least two* of the new tools to check a variable (e.g., `password = ...`) and write 3-4 sentences explaining how the example works.',
        },
      ],
      topic: "How `len`, `in`, and methods help you make decisions",
      isTopicPredefined: true,
      code: "Create a simple example that demonstrates this topic",
      isCodePredefined: false,
      explanation: "Explain how your example works (3-4 sentences)",
      isExplanationPredefined: false,
    } as ReflectionSectionData,

    {
      kind: "Information",
      id: "toolkit-conclusion",
      title: "Ready to Make Decisions",
      content: [
        {
          kind: "text",
          value:
            "Excellent work! You've explored Python's \"question answering toolkit\". You've discovered how to ask about:\n- **Length:** `len(password)`\n- **Membership:** `'!' in password`\n- **Type:** `char.isupper()` or `char.isdigit()`\n\nYou also saw that these tools give you back numbers (like `5`) or `True`/`False` values. These are the exact kind of questions you need to be able to ask in order to have your program make decisions.In the next few lessons, you'll use this knowledge to make your program react to the world around it.",
        },
      ],
    } as InformationSectionData,
  ],
};

export default lessonData;
