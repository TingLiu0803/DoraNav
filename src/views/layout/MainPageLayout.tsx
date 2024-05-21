import NavbarController from '../../controllers/NavbarController'
import Main from './Main'

type MainPageLayout = {
  children: React.ReactNode | JSX.Element
}

const MainPageLayout = ({ children }: MainPageLayout) => {
  return (
    <div className="flex flex-col h-screen py-6 px-12">
      <NavbarController />
      <Main>{children}</Main>
    </div>
  )
}

export default MainPageLayout
