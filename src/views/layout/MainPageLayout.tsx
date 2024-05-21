import React from 'react'
import NavbarController from '../../controllers/NavbarController'
import Main from './Main'
import ContentBlock from '../ContentBlock'

type MainPageLayoutProps = {
  children?: React.ReactNode
}

const MainPageLayout: React.FC<MainPageLayoutProps> = ({ children }) => {
  const containerClasses = 'flex flex-col h-screen lg:py-6 py-4 lg:px-12 px-6'

  return (
    <div className={containerClasses}>
      <NavbarController />
      <Main>
        <ContentBlock
          title="Be Part of The Everlasting Hacker Movement."
          description="Bring the twenty-second century technologies to the present, use them wisely, and make them open source. Explore the world of hackathons, grants, bounties, ideas, and more."
        />
        {children}
      </Main>
    </div>
  )
}

export default MainPageLayout
