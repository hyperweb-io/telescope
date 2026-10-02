import {
  Inquirerer,
  type OptionValue,
  type Question as InquirererQuestion,
} from 'inquirerer';

interface NameValueItem {
  name: string;
  value: unknown;
}

export interface Question {
  _?: boolean;
  name: string;
  type?: string;
  message?: string;
  default?: any;
  required?: boolean;
  choices?: string[] | NameValueItem[];
}

const toOptions = (
  choices: Question['choices'] = []
): (string | OptionValue)[] =>
  choices.map((choice: string | NameValueItem) =>
    typeof choice === 'string'
      ? choice
      : { name: choice.name, value: choice.value }
  );

const transform = ({ choices, type, ...rest }: Question): InquirererQuestion => {
  switch (type) {
    case 'fuzzy':
    case 'fuzzy:objects':
      return { ...rest, type: 'autocomplete', options: toOptions(choices) };
    case 'list':
    case 'checkbox':
      return { ...rest, type, options: toOptions(choices) };
    case 'confirm':
    case 'number':
    case 'password':
      return { ...rest, type };
    default:
      return { ...rest, type: 'text' };
  }
};

const isOptionValue = (value: unknown): value is OptionValue =>
  typeof value === 'object' && value !== null && 'value' in value;

export const prompt = async (
  questions: Question[] = [],
  argv: Record<string, any> = {}
): Promise<Record<string, any>> => {
  const prompter = new Inquirerer();
  try {
    const answers: Record<string, any> = await prompter.prompt(
      argv,
      questions.map(transform)
    );
    questions
      .filter((q) => q.type === 'checkbox' && Array.isArray(answers[q.name]))
      .forEach((q) => {
        answers[q.name] = answers[q.name].map((selected: unknown) =>
          isOptionValue(selected) ? selected.value : selected
        );
      });
    return answers;
  } finally {
    prompter.close();
  }
};
