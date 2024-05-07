import { Link } from 'react-router-dom';

export default function PopularPostItem({
  title,
  _id,
  rank,
  createdAt,
  category,
  countOfVisitors,
}) {
  return (
    <Link
      to={_id}
      key={_id}
      className="col-span-12 md:col-span-4 cursor-pointer"
    >
      <div className="md:p-4 pt-0">
        <div className="bg-themeGreenDark border-t-4 border-b-gray-800"></div>
        <div>
          {/* <!-- item --> */}
          <div className="flex items-start mt-6">
            <h1 className="opacity-75 font-medium text-5xl">{rank}</h1>
            <div className="ml-3">
              <h6 className="font-medium text-base mb-2">{title}</h6>
              <p className="text-sm opacity-75">
                <a href="#" className="text-themeGreenDark">
                  Asiye Yaliz
                </a>{' '}
                in{' '}
                <a href="#" className="text-themeGreenDark">
                  {category}
                </a>
              </p>
              <div className="flex items-center space-x-4">
                <p className="opacity-50 text-sm">{createdAt.split('T')[0]}</p>
                <p className="opacity-50 text-sm">View:{countOfVisitors}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
