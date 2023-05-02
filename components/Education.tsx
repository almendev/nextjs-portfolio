import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

interface Props {
  type: string
  time: string
  place: string
  info: string
}

const Details = ({ type, time, place, info }: Props): JSX.Element => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="flex flex-col items-center justify-between my-8 first:mt-0 last:mb-0 w-[64%] mx-auto md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl text-light sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-primary xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium text-light w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  )
}

const Education = (): JSX.Element => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-8xl text-center text-light md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="relative w-3/4 mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-light origin-top md:w-[2px] md:left-[29px] xs:left-[19px]"
        />

        <ul className="flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Meta Frontend Developer"
            time="2023 - current"
            place="Coursera"
            info="Certificate designed by the software engineering experts at Meta that includes HTML, CSS, JavaScript, control version with Git and GitHub, ReactJS and UI/UX design principles."
          />
          <Details
            type="+50 Web Development related courses"
            time="2022 - 2023"
            place="Platzi"
            info="I've completed 58 courses that includes technologies like HTML, CSS, JavaScript, TypeScript, ReactJS, AstroJs, NextJS, NodeJS, MongoDB, Express, Jest, Git, Webpack and Vite."
          />
          <Details
            type="Telecomunication Engineering"
            time="2006 - 2012"
            place="UNEFA"
            info="University degree in engineering that focuses on the design, development, and maintenance of communication systems. It also involved the use of various technologies such as radio, fiber optics, and satellite systems to transmit and receive information."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
