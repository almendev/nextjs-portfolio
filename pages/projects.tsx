import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import { GitHubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import movieAppPic from '../public/images/movie-app.png'
import pokeAppPic from '../public/images/pokemon-app.png'
import githubSearchAppPic from '../public/images/github-search.png'
import mtwWebPic from '../public/images/marbletileworld.png'

interface Props {
  type: string
  title: string
  summary?: string
  img: StaticImageData
  link: string
  github: string
}

const FramerImage = motion(Image)

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github
}: Props): JSX.Element => {
  return (
    <article className="relative flex items-center justify-between w-full rounded-3xl border border-solid border-dark bg-light shadow-2xl p-8 lg:flex-col xs:rounded-2xl xs:p-4">
      <div className="absolute top-3 -right-3 -z-10 w-full h-full rounded-3xl bg-dark md:-right-2 md:top-2 xs:rounded-2xl" />

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
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="flex items-center space-x-4 mt-2">
          <Link
            href={link}
            target="_blank"
            className="py-2 px-4 rounded-lg bg-dark text-light text-lg font-semibold shadow-md border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark sm:text-base"
          >
            Visit the project
          </Link>
          {github !== ''
            ? (
              <Link href={github} target="_blank" className="w-10">
                <GitHubIcon className="hover:text-[#6e5494]" />
              </Link>)
            : null}
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }: Props): JSX.Element => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full rounded-3xl border border-solid border-dark shadow-2xl bg-light p-6 xs:p-4 xs:rounded-2xl">
      <div className="absolute top-3 -right-3 -z-10 w-full h-full rounded-3xl bg-dark md:-right-2 md:top-2 xs:rounded-2xl" />

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
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex items-center space-x-4 w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold py-1 px-2 bg-light border-2 border-solid border-dark rounded-lg hover:bg-dark hover:text-light hover:border-transparent md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GitHubIcon className="hover:text-[#6e5494]" />
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>AM | Projects</title>
        <meta
          name="description"
          content="Alfredo Mendez's portfolio about page"
        />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16">
        <Layout className="pt-16">
          <AnimatedText
            text="Turning ideas into reality"
            className="text-8xl text-center mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Movie Application"
                summary="This web app is built using ReactJS, React Router, Tailwind, and Vite, and is designed to help users search for movies and view detailed information about them, such as duration, synopsis, genre, original language, and where they can be streamed, rented, or purchased (in Portugal). With the ability to filter by genre, users can easily find the movie they are looking for, even if they don't remember the title. Additionally, users can explore similar movies to the one they are interested in. The app is powered by the API of themoviedb.org and justwatch, making it a comprehensive and reliable source of movie information."
                img={movieAppPic}
                link="https://delightful-torte-7854ad.netlify.app"
                github="https://github.com/almendev/movie-react-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured Project"
                title="Pokemon Application"
                img={pokeAppPic}
                link="https://hilarious-bublanina-eb8d23.netlify.app/"
                github="https://github.com/almendev/poke-react-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured Project"
                title="GitHub Search Application"
                img={githubSearchAppPic}
                link="https://almendev.github.io/github-search/"
                github="https://github.com/almendev/github-search"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Marble & Tile World Web"
                summary=" This is a real project created for Marble & Tile World, designed by the client and developed by me using AstroJS. The website is fully responsive and includes SEO and internationalization (ENG/ESP)."
                img={mtwWebPic}
                link="https://marbletileworld.com/"
                github=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
