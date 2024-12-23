import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const AnimatedSubscribeButton = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribeStatus);

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex h-10 w-[140px] items-center justify-center overflow-hidden rounded-md bg-white outline outline-2 outline-primary"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative flex h-full w-full items-center justify-center font-semibold text-primary"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              {changeText}
            </span>
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex h-10 w-[140px] cursor-pointer items-center justify-center rounded-md border-none bg-primary"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative flex items-center justify-center font-semibold"
            initial={{ x: -50 }}
            animate={{ x: 0}}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            <span className="group inline-flex items-center">
              {initialText}
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export const AnimatedButton = () => {
  return (
    <AnimatedSubscribeButton
      buttonColor="bg-primary"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      initialText={`Follow${" "}`}
      changeText={`Follow${" "}`}
      />
  );
};
