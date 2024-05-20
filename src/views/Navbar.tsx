import '../index.css'
import { NavData } from '../model/navDataModel'
import DoraIcon from '../svg/DoraLogo'
import DownArrow from '../svg/DownArrow'
import SubItems from './SubItems'

type LocalStateData = {
  activeOptionId: number | null
  setActiveOptionId: React.Dispatch<React.SetStateAction<number | null>>
}

const Navbar: React.FC<{ navData: NavData; localStateData: LocalStateData }> = ({
  navData,
  localStateData
}) => {
  const isActive = localStateData.activeOptionId !== null

  return (
    <nav id={navData.id.toString() + 'nav'}>
      <ul className="flex">
        <DoraIcon
          className={`cursor-pointer transition-transform duration-500 ease-in-out ${isActive ? 'animate-rotate-and-back' : ''}`}
        />
        {navData.options.map(option => (
          <li
            key={option.id}
            className="relative pl-8 mt-0.5"
            onMouseEnter={() => localStateData.setActiveOptionId(option.id)}
            onMouseLeave={() => localStateData.setActiveOptionId(null)}
          >
            <a
              className={`cursor-pointer flex items-center group ${localStateData.activeOptionId === option.id ? 'text-orange-500' : 'hover:text-orange-500'}`}
            >
              <span className="font-medium">{option.name}</span>
              <DownArrow
                className={`inline-block ml-1 transition-transform duration-300 ease-in-out ${localStateData.activeOptionId === option.id ? '-rotate-180 fill-orange-400' : 'group-hover:-rotate-180 group-hover:fill-orange-400'} 
                ${option.subOptions.length > 0 ? 'block' : 'hidden'}`}
              />
            </a>
            {localStateData.activeOptionId === option.id &&
              option.subOptions.length > 0 && (
                <div className="mt-4">
                  <SubItems subOptions={option.subOptions} />
                </div>
              )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
