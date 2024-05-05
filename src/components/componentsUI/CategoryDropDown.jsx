import { useState } from 'react';

const categories = [
  {
    id: '663515c3c78ea0a82b9220cb',
    name: 'World',
  },
  {
    id: '663515c3c78ea0a82b9220dd',
    name: 'Technology',
  },
  {
    id: '663515c3c78ea0a82b9220ee',
    name: 'Design',
  },
  {
    id: '663515c3c78ea0a82b9220ff',
    name: 'Culture',
  },
  {
    id: '663515c3c78ea0a82b922110',
    name: 'Business',
  },
  {
    id: '663515c3c78ea0a82b922121',
    name: 'Politics',
  },
  {
    id: '663515c4c78ea0a82b922132',
    name: 'Science',
  },
  {
    id: '663515c4c78ea0a82b922143',
    name: 'Health',
  },
  {
    id: '663515c4c78ea0a82b922154',
    name: 'Style',
  },
  {
    id: '663515c4c78ea0a82b922165',
    name: 'Travel',
  },
];

export default function CategoryDropDown({
  list = categories,
  onChange,
  name,
  round,
  title
}) {
  const [isOpen, setIsOpen] = useState(false);
  //const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      //style={{ border: '1px solid red' }}
      className="relative w-[250px] sm:w-[300px] md:w-[350px] mt-4"
    >
      <select
        id={name}
        name={name}
        className="bg-themeDirtyWhite flex-shrink-0 w-full font-ibm-flex italic inline-flex items-center py-2.5 px-4 text-sm font-medium text-center h-[50px] text-themeBrown border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
        onChange={onChange}
      >
        <option value="">{title}</option>
        {list.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <div
        id="dropdown"
        // className={`absolute w-full bg-white divide-y divide-gray-100 rounded-lg shadow ${
        //   isOpen ? '' : 'hidden'
        // }`}
        className={`absolute w-full bg-white divide-y divide-gray-100 ${
          round === 'left' ? 'rounded-l-lg' : 'rounded-lg'
        } shadow hidden`}
      >
        {list.map((category, index) => (
          <li key={index}>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
            >
              {category.name}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
