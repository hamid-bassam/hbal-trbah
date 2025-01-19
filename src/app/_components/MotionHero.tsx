"use client";
import { motion } from 'framer-motion';
import React from 'react';
export const MotionHero = ({ children }: { children: React.ReactNode }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      {children}
    </motion.div>
  );
};