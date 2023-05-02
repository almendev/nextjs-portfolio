import Link from 'next/link'
import Layout from './Layout'

const Footer = (): JSX.Element => {
  return (
    <footer className="w-full border-t-2 border-solid border-light font-medium text-lg sm:text-base text-light">
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Lefts Reserved</span>
        <div className="flex items-center lg:py-2">
          Built with <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://almen.dev"
            target={'_blank'}
            className="underline underline-offset-2"
          >
            Almendev
          </Link>
        </div>
        <Link
          href="https://telegram.me/almendev"
          target={'_blank'}
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
