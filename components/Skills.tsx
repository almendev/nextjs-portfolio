import { motion } from 'framer-motion'

interface Props {
  name: string
  x: string
  y: string
}

const Skill = ({ name, x, y }: Props): JSX.Element => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-4 py-2 rounded-full font-semibold bg-light
      text-dark cursor-pointer md:text-sm md:py-1.5 md:px-3 sm:bg-transparent sm:shadow-none sm:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = (): JSX.Element => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-light md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm">
        <motion.div
          className="flex items-center w-16 h-16 justify-center rounded-full font-semibold bg-light text-dark shadow-light cursor-pointer
          lg:w-12 lg:h-12 lg:text-sm xs:text-xs xs:w-10 xs:h-10"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="Git" x="0vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-20vw" y="-22vw" />
        <Skill name="Bootstrap" x="12vw" y="22vw" />
        <Skill name="TypeScricript" x="-16vw" y="-10vw" />
        <Skill name="AstroJS" x="26vw" y="0vw" />
        <Skill name="CSS" x="8vw" y="-8vw" />
        <Skill name="NextJS" x="-26vw" y="2vw" />
        <Skill name="HTML" x="-8vw" y="8vw" />
        <Skill name="JavaScript" x="14vw" y="12vw" />
        <Skill name="ReactJS" x="20vw" y="-18vw" />
        <Skill name="MongoDB" x="-18vw" y="20vw" />
      </div>
    </>
  )
}

export default Skills
