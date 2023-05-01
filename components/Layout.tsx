import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const Layout = ({ children, className = '' }: Props): JSX.Element => {
  return (
    <div
      className={`w-full h-full inline-block p-32 bg-light z-0 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout
