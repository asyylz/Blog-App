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
  {
    id: '6635f34da17ed84f75f35d45',
    name: 'Food',
  },
];

export default function CategoryDropDown({
  list = categories,
  onChange,
  name,
  round,
  title,
}) {
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
    </div>
  );
}
