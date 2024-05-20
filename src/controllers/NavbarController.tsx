import useNav from '../hooks/useNav'
import Navbar from '../views/Navbar'

const NavbarController = () => {
  const { navData, loading, error, activeOptionId, setActiveOptionId } = useNav()
  const localStateData = { activeOptionId, setActiveOptionId }
  if (loading || !navData) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return (
    <div className="hidden md:block">
      <Navbar navData={navData} localStateData={localStateData} />
    </div>
  )
}

export default NavbarController
