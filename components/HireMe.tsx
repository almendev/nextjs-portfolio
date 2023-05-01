import Link from 'next/link'
import { CircularText } from './Icons'

const HireMe = (): JSX.Element => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden sm:right-2 md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute md:translate-y-[-10%]">
      <div className="relative flex items-center justify-center w-48 h-auto md:w-24 md:h-24">
        <CircularText className="fill-dark animate-spin-slow" />

        <Link
          href="mailto:alfredo.jmp7@gmail.com"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-dark
          text-light shadow-md border border-solid border-dark rounded-full font-semibold hover:bg-light hover:text-dark
          md:w-12 md:h-12 md:text-[10px]
          "
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
