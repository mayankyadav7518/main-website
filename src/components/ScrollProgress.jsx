import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {

    const { scrollYProgress } = useScroll();

  return (
     <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-green-600 origin-left w-full h-1.5 top-0 fixed z-50"
      >
        {" "}
      </motion.div>
  )
}
