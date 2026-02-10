import { SignatureIntro } from "@/components/ui/signature-intro";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  return <SignatureIntro onComplete={onComplete} duration={2.8} />;
};

export default IntroAnimation;
