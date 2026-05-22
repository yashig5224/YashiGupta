import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  duration?: number
  delay?: number
  replay?: boolean
  className?: string
  textClassName?: string
  underlineClassName?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  underlineGradient?: string
  underlineHeight?: string
  underlineOffset?: string
  onAnimationComplete?: () => void
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  ({
    text,
    duration = 0.5,
    delay = 0.1,
    replay = true,
    className,
    textClassName,
    underlineClassName,
    as: Component = "h1",
    underlineGradient = "from-amber-400 via-purple-400 to-teal-400",
    underlineHeight = "h-1",
    underlineOffset = "-bottom-2",
    onAnimationComplete,
    ...props
  }, ref) => {
    const letters = Array.from(text)

    const container: Variants = {
      hidden: { 
        opacity: 0 
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { 
          staggerChildren: duration, 
          delayChildren: i * delay 
        }
      })
    }

    const child: Variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      }
    }

    const lineVariants: Variants = {
      hidden: {
        width: "0%",
        left: "50%"
      },
      visible: {
        width: "100%",
        left: "0%",
        transition: {
          delay: letters.length * delay,
          duration: 0.8,
          ease: "easeOut"
        }
      }
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center", className)}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          onAnimationComplete={onAnimationComplete}
          className="relative overflow-hidden"
        >
          <Component className={cn("flex", textClassName)}>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={child}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </Component>

          <motion.span
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "absolute bg-gradient-to-r",
              underlineGradient,
              underlineHeight,
              underlineOffset,
              underlineClassName
            )}
          />
        </motion.div>
      </div>
    )
  }
)
AnimatedText.displayName = "AnimatedText"

export { AnimatedText }
