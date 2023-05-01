import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import profilePic from '../public/images/about-profile-photo.png'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>AM | About</title>
        <meta
          name="description"
          content="Alfredo Mendez's portfolio about page"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full">
        <Layout className="pt-16">
          <AnimatedText
            text="A little bit about me"
            className="text-8xl text-center mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-2 gap-16 w-full sm:gap-8">
            <div className="flex flex-col items-start justify-start md:order-2 md:col-span-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi there! My name is Alfredo Méndez, and I was born in Valencia,
                Venezuela. As far as I can remember, I&apos;ve always been
                interested in technology, which led me to become a
                telecommunications engineer in 2012.
              </p>
              <p className="font-medium my-4">
                During my career, I learned about the science behind things that
                we take for granted today, such as sending a message, making a
                call, or browsing the internet. I also wrote my first lines of
                code in languages such as Pascal, C, and C++, which ignited my
                love and curiosity for programming.
              </p>
              <p className="font-medium">
                Since then, I have worked in various areas in both large and
                small companies in two different countries. While I have learned
                a lot from these experiences, I wasn&apos;t as close to
                technology as I would have liked, so it was time for a change.
              </p>
              <p className="font-medium my-4">
                Today, I live in Portugal and dedicate myself entirely to web
                development. I found it to be the most visual and satisfactory
                way for me to solve problems by applying technology and
                creativity. Through my work, I continue to explore the
                ever-evolving landscape of technology, always seeking new ways
                to apply my skills and creativity to make a meaningful
                contribution to the tech industry and to society as a whole.
              </p>
            </div>

            <div className="relative h-max rounded-3xl border-2 border-solid border-dark bg-light p-8 md:order-1 md:col-span-2">
              <div className="absolute top-3 -right-3 -z-10 w-full h-full rounded-3xl bg-dark" />
              <Image
                src={profilePic}
                alt="Alfredo Mendez"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
          </div>

          <Skills />

          <Experience />

          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
