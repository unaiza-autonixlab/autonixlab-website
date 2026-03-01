import { motion } from "framer-motion";

const FlickerTriangle = ({ className = "" }: { className?: string }) => (
  <motion.span
    className={`block text-primary text-center leading-none ${className}`}
    animate={{ opacity: [0.3, 1, 0.3] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <span className="text-xl sm:text-2xl inline-block rotate-180">▲</span>
  </motion.span>
);

export default FlickerTriangle;
