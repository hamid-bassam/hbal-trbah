"use client"
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
export type MotionImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export const MotionImage = (props: MotionImageProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto max-w-4xl"
    >
      <Image
        {...props}
      />
    </motion.div>
  )
};