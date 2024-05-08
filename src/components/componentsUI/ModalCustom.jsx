
import { createPortal } from 'react-dom';
import './modalcustom.css';
export default function ModalCustom({ children }) {

  return createPortal(
    <div className="flex bg-gray-500/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div
        //style={{ border: '1px solid red' }}
        className="relative p-4 w-full max-w-md md:max-w-xl h-[500px] max-h-full"
      >
        <div
          //style={{ border: '1px solid purple' }}
          className="relative bg-themeDirtyWhite rounded-lg shadow flex flex-col items-center justify-center  h-[250px]"
        >
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
          >
            {/* /------------------- cross close ---------------------- / */}
            <img className="h-6 w-6" src="./modal/crossclose.svg" alt="" />
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
