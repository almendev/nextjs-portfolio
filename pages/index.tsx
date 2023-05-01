import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import profilePic from '../public/images/profile.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { DownloadIcon } from '@/components/Icons'
import HireMe from '@/components/HireMe'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>AM | Home</title>
        <meta name="description" content="Alfredo Mendez's portfolio" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Alfredo Méndez"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>

            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text="Creating your web space"
                className="text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl text-left"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m a telecom engineer based in Portugal who made the
                switch to web development and never looked back!, Come check out
                my projects and other cool stuff in my portfolio.
              </p>
              <div className="flex items-center self-start mt-2 space-x-4 lg:self-center">
                <Link
                  href="/alfredo-mendez-frontend.pdf"
                  target={'_blank'}
                  download={true}
                  className="flex items-center bg-dark text-light py-2 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent shadow-md hover:border-dark md:text-base"
                >
                  Resume <DownloadIcon className="w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  )
}

export default Home
