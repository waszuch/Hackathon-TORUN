import { motion } from 'framer-motion'
import { useRef } from 'react'

interface CounterProps {
  count: number
}

const ReportCounter = ({ count }: CounterProps) => {
  const ref = useRef(null)

  const variants = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
    },
  }

  return (
    <motion.div
      ref={ref}
      className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg mt-0 md:mt-0 md:absolute md:right-4 md:top-[50%] md:-translate-y-1/2"
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="flex items-center">
        <span className="text-sm">Reports:</span>
        <span className="text-xl font-bold ml-2">{count}</span>
      </div>
    </motion.div>
  )
}

export default ReportCounter