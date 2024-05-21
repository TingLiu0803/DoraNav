import { useState } from 'react'
import '../index.css'
import { NavData } from '../model/navDataModel'
import DoraIcon from '../svg/DoraLogo'
import DownArrow from '../svg/DownArrow'
import Windows from '../svg/Windows'
import SubItems from './SubItems'
import Button from './Button'

type LocalStateData = {
  activeOptionId: number | null
  setActiveOptionId: React.Dispatch<React.SetStateAction<number | null>>
}

const Navbar: React.FC<{ navData: NavData; localStateData: LocalStateData }> = ({
  navData,
  localStateData
}) => {
  const isActive = localStateData.activeOptionId !== null
  // This state will control the display of submenus
  const [visibleSub, setVisibleSub] = useState<number | null>(null)

  const handleMouseEnter = (id: number) => {
    localStateData.setActiveOptionId(id)
    setVisibleSub(id)
  }

  const handleMouseLeave = () => {
    localStateData.setActiveOptionId(null)
    setVisibleSub(null)
  }

  return (
    <nav id={navData.id.toString() + 'nav'} className="flex justify-between w-full">
      <ul className="flex">
        <a href="/">
          <DoraIcon
            className={`cursor-pointer transition-transform duration-500 ease-in-out ${isActive ? 'animate-rotate-and-back' : ''}`}
          />
        </a>
        {navData.options.map(option => (
          <li
            key={option.id}
            className="relative pl-8 mt-0.5"
            onMouseEnter={() => handleMouseEnter(option.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              className={`cursor-pointer flex items-center group ${localStateData.activeOptionId === option.id ? 'text-orange-500' : 'hover:text-orange-500'}`}
            >
              <span className="font-medium">{option.name}</span>
              <DownArrow
                className={`inline-block ml-1 transition-transform duration-300 ease-in-out 
                ${
                  localStateData.activeOptionId === option.id
                    ? '-rotate-180 fill-orange-500'
                    : 'group-hover:-rotate-180 group-hover:fill-orange-500'
                } 
                ${option.subOptions.length > 0 ? 'block' : 'hidden'}`}
              />
            </a>
            <div
              className={
                option.subOptions.length > 0 && visibleSub === option.id
                  ? 'submenu-visible'
                  : 'submenu-hidden'
              }
            >
              <SubItems subOptions={option.subOptions} className="left-4 p-4 z-10" />
            </div>
          </li>
        ))}
        <div className="ml-8">
          <Windows
            className={`cursor-pointer ${isActive ? 'animate-rotate-and-move' : ''}`}
          />
        </div>
      </ul>
      <div className="flex items-center space-x-4">
        <Button text="Log in" />
        <div className="flex cursor-pointer">
          <span className="px-4 py-2 rounded-lg font-medium">Search</span>
          <DownArrow className="mt-3 -ml-2" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
