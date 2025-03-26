import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiGit, SiGithub, SiMongodb, SiNetlify, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [ 10, -10 ],
    transition: {
    duration:duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  }
}
});


const Tech = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <DiRedis
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="text-7xl text-red-700"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.8)}
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiGit className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <SiGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1)}
          className="p-4"
        >
          <SiNetlify className="text-7xl text-teal-400" />
        </motion.div>
      </motion.div>
    </div>
  );
} 

export default Tech