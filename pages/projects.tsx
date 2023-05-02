import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import FeaturedProject from '@/components/FeaturedProject'
import Project from '@/components/Project'
import movieAppPic from '../public/images/movie-app.png'
import pokeAppPic from '../public/images/pokemon-app.png'
import githubSearchAppPic from '../public/images/github-search.png'
import mtwWebPic from '../public/images/marbletileworld.png'

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
                summary=" This is a real project created for Marble & Tile World, designed by the client and developed using AstroJS. The website is fully responsive and includes SEO and internationalization (EN/ES)."
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
