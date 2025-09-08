import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

interface Question {
  id: string;
  type: 'single' | 'multiple' | 'scale';
  question: string;
  options: string[];
  required: boolean;
}

interface Answer {
  questionId: string;
  value: string | string[] | number;
}

const questions: Question[] = [
  {
    id: 'concerns',
    type: 'multiple',
    question: 'What are your primary hair concerns? (Select all that apply)',
    options: [
      'Hair thinning or loss',
      'Scalp sensitivity',
      'Dryness and breakage',
      'Lack of volume',
      'Unmanageable texture',
      'Color damage',
      'Slow growth',
      'Itchy or flaky scalp'
    ],
    required: true
  },
  {
    id: 'scalp_sensitivity',
    type: 'single',
    question: 'How would you describe your scalp sensitivity?',
    options: [
      'Very sensitive - reacts to most products',
      'Moderately sensitive - some products cause irritation',
      'Slightly sensitive - occasional reactions',
      'Not sensitive - can use most products without issue'
    ],
    required: true
  },
  {
    id: 'lifestyle',
    type: 'multiple',
    question: 'Which lifestyle factors apply to you?',
    options: [
      'Frequent heat styling',
      'Regular chemical treatments',
      'Active lifestyle/frequent workouts',
      'Protective styling preference',
      'Professional appearance requirements',
      'Minimal maintenance preferred',
      'Frequent travel',
      'Medical hair loss'
    ],
    required: true
  },
  {
    id: 'budget',
    type: 'single',
    question: 'What\'s your preferred investment level for scalp and hair care?',
    options: [
      'Budget-conscious ($25-50/month)',
      'Moderate investment ($50-100/month)',
      'Premium care ($100-200/month)',
      'Luxury treatment ($200+/month)'
    ],
    required: true
  },
  {
    id: 'timeline',
    type: 'single',
    question: 'What\'s your timeline for seeing results?',
    options: [
      'Immediate improvement needed',
      'Within 1-2 months',
      '3-6 months is acceptable',
      'Long-term approach (6+ months)'
    ],
    required: true
  },
  {
    id: 'commitment',
    type: 'scale',
    question: 'How committed are you to following a daily hair care routine?',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    required: true
  }
];

const MatchTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  const handleAnswer = (value: string | string[] | number) => {
    const existingAnswerIndex = answers.findIndex(a => a.questionId === currentQuestion.id);
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      value
    };

    if (existingAnswerIndex >= 0) {
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = newAnswer;
      setAnswers(updatedAnswers);
    } else {
      setAnswers([...answers, newAnswer]);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAnswered = () => {
    return answers.some(a => a.questionId === currentQuestion.id);
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion.id);
  };

  const renderQuestion = () => {
    const currentAnswer = getCurrentAnswer();

    if (currentQuestion.type === 'single') {
      return (
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full p-4 text-left border rounded-lg transition-all hover:border-primary ${
                currentAnswer?.value === option
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      );
    }

    if (currentQuestion.type === 'multiple') {
      const selectedOptions = (currentAnswer?.value as string[]) || [];
      
      return (
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                const isSelected = selectedOptions.includes(option);
                if (isSelected) {
                  handleAnswer(selectedOptions.filter(o => o !== option));
                } else {
                  handleAnswer([...selectedOptions, option]);
                }
              }}
              className={`w-full p-4 text-left border rounded-lg transition-all hover:border-primary flex items-center gap-3 ${
                selectedOptions.includes(option)
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                selectedOptions.includes(option) ? 'border-primary bg-primary' : 'border-muted-foreground'
              }`}>
                {selectedOptions.includes(option) && (
                  <CheckCircle className="h-3 w-3 text-primary-foreground" />
                )}
              </div>
              {option}
            </button>
          ))}
        </div>
      );
    }

    if (currentQuestion.type === 'scale') {
      return (
        <div className="space-y-6">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Not at all committed</span>
            <span>Extremely committed</span>
          </div>
          <div className="flex gap-2 justify-center">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(parseInt(option))}
                className={`w-12 h-12 rounded-full border-2 transition-all hover:border-primary ${
                  currentAnswer?.value === parseInt(option)
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-muted-foreground hover:bg-muted/50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderResults = () => {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-4">
            <Sparkles className="h-5 w-5" />
            Your Personalized Results
          </div>
          <h2 className="text-3xl font-bold mb-4">Your ManeRx Plan is Ready!</h2>
          <p className="text-muted-foreground text-lg">
            Based on your responses, we've created a personalized scalp and hair care plan just for you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommended Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Comprehensive Scalp Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Crown Restoration Experience™
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Custom Wig Consultation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommended Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Divined Edge Control
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Scalp Care Kit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Custom At-Home Regimen
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Book Your Scalp Analysis
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Download Full Plan
          </Button>
        </div>
      </div>
    );
  };

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {renderResults()}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderQuestion()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isAnswered()}
              >
                {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MatchTool;