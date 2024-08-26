import React, { useEffect, useState } from "react";

import {
  MotionValue,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import CursorBlinker from "./cursor";

function useTruncatedText(
  text: string,
): [MotionValue<number>, MotionValue<string>] {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const truncatedText = useTransform(rounded, (latest) =>
    text.slice(0, latest),
  );

  return [count, truncatedText];
}

export default function TypedText({
  firstLine,
  secondLine,
  className,
}: Readonly<{ firstLine: string; secondLine: string; className?: string }>) {
  const [scope, animate] = useAnimate();

  const [firstLineCount, firstLineText] = useTruncatedText(firstLine);
  const [secondLineCount, secondLineText] = useTruncatedText(secondLine);

  // This is a hack, surely there must be a better way
  const [firstLineComplete, setFirstLineComplete] = useState(false);

  useEffect(() => {
    const animation = async () => {
      await animate(firstLineCount, firstLine.length, {
        type: "tween",
        duration: 1,
        delay: 0.5,
        ease: "linear",
        onComplete: () => setFirstLineComplete(true),
      });
      await animate(secondLineCount, secondLine.length, {
        type: "tween",
        duration: 1,
        delay: 0.5,
        ease: "linear",
      });
    };

    animation();
  }, []);

  return (
    <span
      ref={scope}
      className={`text-secondary-700 items-center text-xl uppercase ${className}`}
    >
      <motion.span className="font-semibold">{firstLineText}</motion.span>
      {firstLineComplete ? (
        <>
          <br />
          <motion.span className="text-secondary-500">
            {secondLineText}
          </motion.span>
        </>
      ) : null}
      <CursorBlinker />
    </span>
  );
}
