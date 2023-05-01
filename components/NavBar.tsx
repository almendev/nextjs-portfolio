import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GitHubIcon, LinkedInIcon } from './Icons'
import Logo from './Logo'

interface CustomLinkProps {
  href: string
  title: string
  className?: string
}

interface CustomMobileProps extends CustomLinkProps {
  toggle: () => void
}

const CustomLink = ({
  href,
  title,
  className = ''
}: CustomLinkProps): JSX.Element => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        absolute left-0 -bottom-0.5
        h-[1px] inline-block bg-dark group-hover:w-full transition-[width]
        ease-in-out duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({
  href,
  title,
  className = '',
  toggle
}: CustomMobileProps): JSX.Element => {
  const router = useRouter()

  const handleClick = async (): Promise<void> => {
    try {
      toggle()
      await router.push(href)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className={`${className} relative group text-light `}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
        absolute left-0 -bottom-0.5
        h-[1px] inline-block bg-light group-hover:w-full transition-[width]
        ease-in-out duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="relative flex items-center justify-between w-full px-32 lg:px-16 md:px-12 sm:px-8 py-8 font-medium bg-light">
      <button
        className="lg:flex flex-col justify-center items-center hidden"
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
        ></span>
      </button>

      <div className="lg:hidden flex justify-between items-center w-full">
        <nav className="space-x-4">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          {/* <CustomLink href='/blog' title='Blog' /> */}
        </nav>

        <nav className="flex items-center space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/alfredo-jose-mendez-perez-294ba010b/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className="hover:text-[#0a66c2]" />
          </motion.a>

          <motion.a
            href="https://github.com/almendev"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GitHubIcon className="hover:text-[#6e5494]" />
          </motion.a>
        </nav>
      </div>

      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Logo />
      </div>

      {
        isOpen
          ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, opacity: 1 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center min-w-[70vw] p-32 z-10 bg-dark/90 rounded-2xl backdrop-blur-md"
            >
              <nav className="flex flex-col justify-center items-center space-y-2">
                <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                <CustomMobileLink
                  href="/about"
                  title="About"
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/projects"
                  title="Projects"
                  toggle={handleClick}
                />
                {/* <CustomMobileLink href='/blog' title='Blog' toggle={handleClick} /> */}
              </nav>

              <nav className="flex items-center space-x-4 text-light mt-4">
                <motion.a
                  href="https://www.linkedin.com/in/alfredo-jose-mendez-perez-294ba010b/"
                  target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon className="hover:text-[#0a66c2]" />
                </motion.a>

                <motion.a
                  href="https://github.com/almendev"
                  target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GitHubIcon className="hover:text-[#6e5494]" />
                </motion.a>
              </nav>
            </motion.div>)
          : null}
    </header>
  )
}

export default NavBar
