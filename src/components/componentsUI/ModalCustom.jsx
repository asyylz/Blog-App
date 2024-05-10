import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
export default function ModalCustom({
  children,
  onClose,
  comingFromErrorPage,
  comingFromUpdate,
  postId,
  comingFromDelete,
  newPostId,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!comingFromErrorPage) {
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
        if (comingFromUpdate) {
          navigate(`/${postId}`);
        } else if (comingFromErrorPage) {
          navigate('/');
        } else if (comingFromDelete) {
          return;
        } else if (newPostId) {
          navigate(`/${newPostId}`);
        } else {
          navigate('/');
        }
      }, 1000);
    }
  }, []);

  return createPortal(
    <div className="flex bg-gray-500/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  justify-center items-center w-full md:inset-0 h-screen">
      <div className="container bg-themeDirtyWhite h-[250px] w-[500px] flex items-center px-5 flex-col justify-center rounded-lg">
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}
