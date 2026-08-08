import { Loader2 } from "lucide-react";

interface LoadingStepProps {
  currentStep: number;
  step: number;
  label: string;
}
const LoadingStep: React.FC<LoadingStepProps> = ({
  currentStep,
  step,
  label,
}) => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#0A0A0A]">
    <div className="flex items-center gap-3 mb-2">
      <div
        className={`rounded-full p-1.5 transition-all duration-500 ${
          currentStep === step
            ? "bg-[#E93F3F]/10 border border-[#E93F3F]/30 shadow-[0_0_15px_rgba(233,63,63,0.2)]"
            : currentStep > step
            ? "bg-green-500/10 border border-green-500/30"
            : "bg-white/5 border border-white/10"
        }`}
      >
        {currentStep > step ? (
          <svg
            className="h-4 w-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : currentStep === step ? (
          <Loader2 className="h-4 w-4 text-[#E93F3F] animate-spin" />
        ) : (
          <div className="h-4 w-4 rounded-full bg-transparent" />
        )}
      </div>
      <span
        className={`text-sm tracking-wide transition-colors duration-300 ${
          currentStep === step
            ? "text-white font-medium"
            : currentStep > step
            ? "text-green-500"
            : "text-zinc-500"
        }`}
      >
        {label}
      </span>
    </div>
  </div>
);

export default LoadingStep;