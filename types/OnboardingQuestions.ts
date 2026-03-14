export type OnboardingQuestion = {
  id: number;
  category: string;
  question: string;
  subtitle: string;
  type: string;
  answers: { id: string, option: string; score: number }[];
};

export type OnboardingAnswer = {
  id: string,
  option: string,
  score: number
}
