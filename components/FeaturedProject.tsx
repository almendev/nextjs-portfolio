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

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github
}: Props): JSX.Element => {
  return (
    <article className="relative flex items-center justify-between w-full rounded-3xl border border-solid border-light bg-dark shadow-2xl p-8 lg:flex-col xs:rounded-2xl xs:p-4">
      <div className="absolute top-3 -right-3 -z-10 w-full h-full rounded-3xl bg-light md:-right-2 md:top-2 xs:rounded-2xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 decoration-light"
        >
          <h2 className="w-full my-2 text-left text-4xl text-light font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-light sm:text-sm">{summary}</p>
        <div className="flex items-center space-x-4 mt-2">
          <Link
            href={link}
            target="_blank"
            className="py-2 px-4 rounded-lg bg-light text-dark text-lg font-semibold shadow-md border-2 border-solid border-transparent hover:border-light hover:bg-dark hover:text-light sm:text-base"
          >
            Visit the project
          </Link>
          {github !== ''
            ? (
              <Link href={github} target="_blank" className="w-10">
                <GitHubIcon className="hover:text-[#6e5494] text-light" />
              </Link>)
            : null}
        </div>
      </div>
    </article>
  )
}

export default FeaturedProject
