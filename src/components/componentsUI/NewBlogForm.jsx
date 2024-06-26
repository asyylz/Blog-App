import { Form } from 'react-router-dom';
import CategoryDropDown from '../componentsUI/CategoryDropDown';
import { useRouteLoaderData } from 'react-router-dom';
import BackPageButton from './BackPageButton';

const fields = [
  { label: 'Title', type: 'text', name: 'title' },
  { label: 'Image URL', type: 'text', name: 'image' },
];

const listDropDown = [{ name: 'Published' }, { name: 'Draft' }];

export default function NewBlogForm({ post }) {
  const { categories } = useRouteLoaderData('root');

  return (
    <section
      //style={{ border: '1px solid red' }}
      className="flex items-center flex-col text-themeBrown mb-40 bg-themeDirtyWhite"
    >
      <BackPageButton />

      <div className="text-center py-2 pt-20 border-b-4  border-themeGreenDark">
        <h4 className="text-3xl sm:text-5xl font-bold leading-none">
          Create you own post
        </h4>
      </div>
      <div
        //style={{ border: '1px solid red' }}
        className="w-full sm:w-[90vw] bg-opacity-70 shadow-xl p-8 backdrop-filter backdrop-blur-md text-themeBrown"
      >
        {/* <!-- ContactForm component --> */}
        <Form method="POST" className="grid grid-cols-12 gap-4 lg:gap-8">
          {fields.map((field, index) => (
            <div key={index} className="col-span-12 mb-3 mt-2">
              <input
                className="text-md  text-themeBrown max-h-14 w-full bg-transparent border-b-2 border-gray-300 placeholder:text-themeBrown  opacity-90 transition ease-in-out duration-700 focus:border-b-themeGreenDark  focus:outline-none py-4"
                type={field.type}
                name={field.name}
                placeholder={field.label}
                defaultValue={post ? post[field.name] : ''}
              />
            </div>
          ))}
          <div
            //style={{ border: '1px solid red' }}
            className="col-span-12 mb-3 mt-2 flex flex-col sm:flex-row  items-center justify-evenly"
          >
            <CategoryDropDown
              list={categories}
              name="categoryId"
              title="All Categories"
              defaultValue={post ? post.categoryId._id : ''}
            />
            <CategoryDropDown
              list={listDropDown}
              name="isPublish"
              title="Status"
              defaultValue={
                post ? (post.isPublish ? 'Published' : 'Draft') : ''
              }
            />
            {post && <input type="hidden" name="postId" value={post._id} />}
          </div>
          <div className="col-span-12  mb-3 mt-2 flex justify-evenly">
            <textarea
              id="content"
              name="content"
              rows="14"
              className="block p-2.5 text-lg w-full ease-in-out duration-600 text-themeBrown bg-themeDirtyWhite rounded-lg border border-gray-300 focus:outline-none focus:ring-0.5 focus:ring-themeGreenDark focus:border-themeGreenDark"
              placeholder="Content"
              defaultValue={post ? post.content : ''}
            ></textarea>
          </div>

          <div className="col-span-12">
            <div className="text-center mt-4">
              <button className="bg-themeGreenDark text-themeCream text-xl py-3 px-10 min-w-[44px] rounded-lg border-spacing-1 border-themeGreenDark hover:bg-themeGreen focus:ring-2 focus:outline-none hover:outline-none focus:ring-themeGreenDark">
                {post ? 'Update' : 'New Blog'}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}
