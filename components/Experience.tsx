import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

interface Props {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work
}: Props): JSX.Element => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = (): JSX.Element => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-8xl text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-3/4 mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top md:w-[2px] md:left-[29px] xs:left-[19px]"
        />

        <ul className="flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Planner Executive"
            company="Saludsa"
            companyLink="https://www.saludsa.com/"
            time="2016-2021"
            address="República de El Salvador N° 36-84. Quito, Ecuador"
            work="I was a part of the hospital medical audit team in the planning area, primarily responsible for managing the team's workload and ensuring timely delivery."
          />
          <Details
            position="Credit and Collection Assistant"
            company="Unilever"
            companyLink="https://www.unilever-southlatam.com/"
            time="2013-2015"
            address="Humbolt Ave. and Bolivar St. Carabobo, Venezuela"
            work="I was part of the credit and collections team responsible for managing payments from Tio Rico's (Ice cream brand) customer portfolio."
          />
          <Details
            position="Fixed Assets Assitant"
            company="Unilever"
            companyLink="https://www.unilever-southlatam.com/"
            time="2013-2013"
            address="Humbolt Ave. and Bolivar St. Carabobo, Venezuela"
            work="I was part of the fixed assets area responsible for managing the allocation, withdrawal, and storage of refrigerators and ice cream carts to affiliated businesses and distributors in the central-north region of the country."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
