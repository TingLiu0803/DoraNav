import { NavData } from '../model/navDataModel'

const SubItems: React.FC<{ subOptions: NavData['options']; className?: string }> = ({
  subOptions,
  className
}) => {
  return (
    <ul
      className={`${className} absolute w-72 shadow-md rounded-lg bg-orange-50 opacity-80`}
    >
      {subOptions.map(option => (
        <li key={option.id} className="mt-4">
          <a
            className="block cursor-pointer hover:text-orange-500 flex flex-col group"
            href={option.path}
          >
            <span className="font-medium group-hover:text-orange-500">{option.name}</span>
            <span className="text-sm text-gray-500 group-hover:text-orange-500">
              {option.description}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SubItems
