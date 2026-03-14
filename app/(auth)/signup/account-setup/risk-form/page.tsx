'use client';

import { act, useState } from 'react';
import questionsData from '@/user-questions/onboarding-questions.json';
import {
  OnboardingAnswer,
  OnboardingQuestion,
} from '@/types/OnboardingQuestions';
import { optimizationEngine } from '@/scripts/optimization-engine';
import { useRouter } from 'next/navigation';

const QUESTIONS: OnboardingQuestion[] = questionsData;
const NUMBER_OF_QUESTIONS: number = QUESTIONS.length;

export default function QuestionsPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [scores, setScores] = useState<number[]>(
    Array(QUESTIONS.length).fill(0),
  );

  const [answers, setAnswers] = useState<string[]>(
    Array(QUESTIONS.length).fill(''),
  );

  const [submitted, setSubmitted] = useState<boolean>(false)

  const currentQuestion = QUESTIONS[currentIndex];
  const end = currentIndex === NUMBER_OF_QUESTIONS - 1;

  let riskScore = 0;

  function handleUpdateAnswer(answerId: string, score: number) {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = answerId;
      return updated;
    });

    setScores((prev) => {
      const updated = [...prev];
      updated[currentIndex] = score;
      return updated;
    });
  }

  function handleNextClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!answers[currentIndex]) return;
    if (currentIndex < NUMBER_OF_QUESTIONS - 1)
      setCurrentIndex((prev) => prev + 1);
    if (currentIndex === NUMBER_OF_QUESTIONS - 1) handleSubmit();
  }

  function handleSubmit() {
    // calculate average score
    riskScore = parseFloat(
      (scores.reduce((sum, n) => sum + n, 0) / scores.length).toFixed(5),
    );
    console.log(riskScore);
    router.push(`/signup/account-setup/my-portfolio?risk_score=${riskScore}`)
    // const portfolioWeights = optimizationEngine(riskScore).bestWeights
    // console.log(portfolioWeights)
  }

  function handlePreviousClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (currentIndex >= 1) setCurrentIndex((prev) => prev - 1);
  }

  function AnswerCard({ answer }: { answer: OnboardingAnswer }) {
    const isSelected = answers[currentIndex] === answer.id;
    const activeStyle =
      'border-2 border-primary p-4 rounded-lg bg-gray-100 cursor-pointer';
    const defaultStyle =
      'border-2 border-gray-200 p-4 rounded-lg bg-white cursor-pointer';

    return (
      <div
        onClick={() => handleUpdateAnswer(answer.id, answer.score)}
        className={isSelected ? activeStyle : defaultStyle}
      >
        <p>{answer.option}</p>
      </div>
    );
  }

  function ProgressBar() {
    const count = answers.filter((item) => item !== '').length;
    const percent = (count / 11) * 100;

    return (
      <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden mb-10">
        <div
          className="absolute left-0 top-0 z-10 bg-primary h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-[#F7F7F2]">
      <div className="h-full py-20 w-1/2 flex flex-col ">
        <ProgressBar />
        <div className="flex-1">
          <div className="mb-5">
            <h1 className="text-2xl">
              {currentQuestion.id}. {currentQuestion.question}
            </h1>
            <p className="text-sm">{currentQuestion.subtitle}</p>
          </div>

          <div className="grid grid-row-1 grid-col-5 gap-5">
            {currentQuestion.answers.map((answer) => (
              <AnswerCard key={answer.id} answer={answer} />
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={handlePreviousClick}
            className="cursor-pointer bg-primary w-30 py-2 rounded-lg text-white font-semibold"
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            className="cursor-pointer bg-primary w-30 py-2 rounded-lg text-white font-semibold"
          >
            {end ? 'Submit' : 'Next'}
          </button>
        </div>
        <button
          onClick={() => {
            console.log(scores);
            console.log(answers);
          }}
        >
          Print arrays
        </button>
      </div>
    </div>
  );
}
