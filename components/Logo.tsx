import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="flex items-center justify-center w-12 h-12 bg-light text-dark rounded-full text-lg font-semibold shadow-md"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 60
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        AM
      </MotionLink>
    </div>
  )
}

export default Logo
