export default function CategoryDropDown({
  list,
  name,
  round,
  title,
  defaultValue,

}) {
  return (
    <div
      //style={{ border: '1px solid red' }}
      className={`relative w-[180px] sm:w-[200px] md:w-[300px] ${
        round === 'left' ? '' : 'mt-6'
      }`}
    >
      <select
        id={name}
        name={name}
        className={`bg-themeDirtyWhite flex-shrink-0 w-full font-ibm-flex italic inline-flex items-center sm:py-2.5 sm:px-4 text-sm font-medium text-center  text-wrap sm:text-nowrap h-[50px] text-themeBrown border border-gray-300 ${
          round === 'left' ? 'rounded-l-lg' : 'rounded-lg'
        } hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100`}
        defaultValue={defaultValue ? defaultValue : ''}
      >
        <option  value="">{title}</option>
        {list.map((category, index) => (
          <option
            key={index}
            value={category._id} // backend den cek kategorileri
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
