"use client";
import { motion } from 'framer-motion';
import React from 'react';

export const MotionArticleCard = ({ children }: { children: React.ReactNode }) => {

  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className=""
    >

      {children}
    </motion.div>
  );
};