import { SignatureIntro } from "@/components/ui/signature-intro";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  return <SignatureIntro onComplete={onComplete} duration={3.2} />;
};

export default IntroAnimation;
