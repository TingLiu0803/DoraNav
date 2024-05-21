import React, { useState } from 'react'
import { NavData } from '../../model/navDataModel'
import Burger from '../../svg/Burger'
import DownArrow from '../../svg/DownArrow'

const BurgerMenu: React.FC<{ navData: NavData }> = ({ navData }) => {
  const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // This will control the visibility of the entire menu

  const toggleSubmenu = (id: number) => {
    if (openSubmenuId === id) {
      setOpenSubmenuId(null) // Toggle the submenu
    } else {
      setOpenSubmenuId(id)
    }
  }

  return (
    <div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Burger />
      </button>
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-orange-50 shadow-md rounded-lg p-4 absolute top-16 left-0 right-0 z-50">
          {navData.options.map((option, i) => (
            <div
              key={option.id}
              className={`py-4 w-full ${i !== navData.options.length - 1 ? 'border-b' : ''} border-gray-300`}
            >
              <button
                className="flex justify-between w-full px-4 py-2"
                onClick={() => toggleSubmenu(option.id)}
              >
                <span className="font-medium">{option.name}</span>
                <DownArrow
                  className={`transition-transform duration-300 ease-in-out 
                    ${openSubmenuId === option.id ? '-rotate-180' : 'rotate-0'}`}
                />
              </button>
              {openSubmenuId === option.id && option.subOptions.length > 0 && (
                <div className="flex flex-col mt-2">
                  {option.subOptions.map(subOption => (
                    <div
                      key={`${option.id}-${subOption.id}`}
                      onClick={() => (window.location.href = subOption.path)}
                      className="hover:text-orange-500 text-gray-500 pl-4 py-1 cursor-pointer"
                    >
                      {subOption.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
