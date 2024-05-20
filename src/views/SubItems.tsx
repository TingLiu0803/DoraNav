import { NavData } from '../model/navDataModel'

const SubItems: React.FC<{ subOptions: NavData['options'] }> = ({ subOptions }) => {
  return (
    <ul className="absolute left-4 shadow-md rounded-lg p-4 z-10 w-72">
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
