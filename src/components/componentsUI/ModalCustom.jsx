import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, redirect } from 'react-router-dom';
export default function ModalCustom({ children, isSuccess }) {
  const navigate = useNavigate();
  console.log(isSuccess);

  useEffect(() => {
    console.log('clicked');
    if (isSuccess) {
      setTimeout(() => {
        navigate('/');
      }, 600);
    }
  }, [isSuccess]);

  return createPortal(
    <div className="flex bg-gray-500/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  justify-center items-center w-full md:inset-0 h-screen">
      {/* <div
        style={{ border: '1px solid red' }}
        className="relative flex items-center p-4 w-full max-w-md md:max-w-xl h-[400px] max-h-full"
      > */}
        <div
          //style={{ border: '1px solid red' }}
          className="container bg-themeDirtyWhite h-[250px] w-[500px] flex items-center px-5 flex-col justify-center rounded-lg"
        >
          {children}
        </div>
      {/* </div> */}
    </div>,
    document.getElementById('modal')
  );
}
