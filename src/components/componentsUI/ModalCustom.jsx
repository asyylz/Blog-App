import { createPortal } from 'react-dom';
//import './modalcustom.css';
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
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
