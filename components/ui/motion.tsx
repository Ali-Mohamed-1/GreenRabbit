"use client";

import React, { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withReducedMotion(Component: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapped = forwardRef((props: any, ref) => {
    const shouldReduceMotion = useReducedMotion();
    if (shouldReduceMotion) {
      const reducedProps = { ...props, transition: { duration: 0 } };
      if (props.whileInView) {
        reducedProps.animate = props.whileInView;
        delete reducedProps.whileInView;
      }
      return <Component ref={ref} {...reducedProps} />;
    }
    return <Component ref={ref} {...props} />;
  });
  Wrapped.displayName = "WithReducedMotion";
  return Wrapped;
}

export const MotionDiv = withReducedMotion(motion.div);
export const MotionP = withReducedMotion(motion.p);
export const MotionH1 = withReducedMotion(motion.h1);
export const MotionH2 = withReducedMotion(motion.h2);
export const MotionH3 = withReducedMotion(motion.h3);
export const MotionHeader = withReducedMotion(motion.header);
