import useNav from '../hooks/useNav'
import Windows from '../svg/Windows'
import Navbar from '../views/Navbar'

const NavbarController = () => {
  const { navData, loading, error, activeOptionId, setActiveOptionId } = useNav()
  const localStateData = { activeOptionId, setActiveOptionId }
  // If loading, show loading animation on where the navbar will be
  if (loading || !navData)
    return (
      <div className="flex items-center justify-center">
        <Windows className="cursor-pointer animate-rotate-and-move" />
      </div>
    )
  // If error, show error message
  if (error) return <div>Error: {error}</div>
  return (
    <div className="hidden lg:block">
      <Navbar navData={navData} localStateData={localStateData} />
    </div>
  )
}

export default NavbarController
