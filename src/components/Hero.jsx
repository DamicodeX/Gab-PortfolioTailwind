import { HERO_CONTENT } from '../constants';
import profile from '../assets/profile.png';
import { motion } from "framer-motion";

const containerVariants ={
  hidden: { opacity:0, x: -100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5
    }
  }
}

const childVariants ={
  hidden: { opacity:0, x:-100},
  visible:{opacity:1, x:0, transition:{duration:0.5}}
} 


const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center pb-4 lg:mb-36">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={childVariants}
            className="pb-2 text-3xl text-center lg:text-7xl"
          >
            Gabriel Adeniran
          </motion.h2>
          <motion.span
            variants={childVariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center text-transparent"
          >
            Frontend Developer
          </motion.span>
          <motion.p
            variants={childVariants}
            className="my-2 max-w-5xl py-6 text-xl leading-relaxed tracking-tighter text-center"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={childVariants}
            href="/Gabriel Adeniran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full p-4 text-sm text-stone-600 font-semibold"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero