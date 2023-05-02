import { motion } from 'framer-motion'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import { GitHubIcon } from '@/components/Icons'

const FramerImage = motion(Image)

interface Props {
  type: string
  title: string
  summary?: string
  img: StaticImageData
  link: string
  github: string
}

const Project = ({ type, title, img, link, github }: Props): JSX.Element => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full rounded-3xl border border-solid border-light shadow-2xl bg-dark p-6 xs:p-4 xs:rounded-2xl">
      <div className="absolute top-3 -right-3 -z-10 w-full h-full rounded-3xl bg-light md:-right-2 md:top-2 xs:rounded-2xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      50vw"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 decoration-light"
        >
          <h2 className="w-full my-2 text-left text-3xl text-light font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex items-center space-x-4 w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg text-light font-semibold py-1 px-2 bg-dark border-2 border-solid border-light rounded-lg hover:bg-light hover:text-dark hover:border-transparent md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GitHubIcon className="hover:text-[#6e5494] text-light" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Project
