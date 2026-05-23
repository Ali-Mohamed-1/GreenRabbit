"use client";

import React, { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

function withReducedMotion(Component: any) {
  return forwardRef((props: any, ref) => {
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
}

export const MotionDiv = withReducedMotion(motion.div);
export const MotionP = withReducedMotion(motion.p);
export const MotionH1 = withReducedMotion(motion.h1);
export const MotionH2 = withReducedMotion(motion.h2);
export const MotionH3 = withReducedMotion(motion.h3);
export const MotionHeader = withReducedMotion(motion.header);
