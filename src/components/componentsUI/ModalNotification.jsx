import { createPortal } from 'react-dom';
import { useSubmit } from 'react-router-dom';
export default function ModalConfirmation({
  openModal,
  setConfirm,
  setOpenModal,
  id,
}) {
  const submit = useSubmit();

  //   async function submit(data, options) {
  //     return new Promise((resolve) => setTimeout(resolve, 1000));
  //   }

  const handleClick = () => {
    setOpenModal({ text: '', modalType: '', status: false });
  };

  const handleClickConfirm = async () => {
    setConfirm(true);
    //setLoading(true);
    // stimulate the delete request
    submit({ id: id, actionType: 'delete' }, { method: 'delete' });
    //setLoading(false);
    setOpenModal({
      text: 'Post successfully deleted.',
      modalType: 'success',
      status: true,
    });
    setConfirm(false);
  };

  setTimeout(
    () => setOpenModal({ text: '', modalType: '', status: false }),
    4000
  );

  return createPortal(
    <div
      //style={{border:'1px solid red'}}
      id="popup-modal"
      className={` bg-gray-500/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        openModal.status ? 'flex' : 'hidden'
      }`}
    >
      <div
        //style={{border:'1px solid red'}}
        className="relative p-4 w-full max-w-md md:max-w-xl h-[500px] max-h-full"
      >
        <div
          //style={{ border: '1px solid red' }}
          className="relative bg-themeDirtyWhite rounded-lg shadow "
        >
          <button
            onClick={handleClick}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
          >
            {/* /------------------- cross close ---------------------- / */}
            <img className="h-6 w-6" src="./modal/crossclose.svg" alt="" />
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-4 md:p-5 text-center">
            {/* /----------------------- warning ---------------------- / */}
            {openModal.modalType === 'warning' && (
              <img
                className="mx-auto mb-4 text-gray-400 w-14 h-14"
                src="./modal/warning.svg"
                alt="warning"
              />
            )}

            <h3 className="mb-5 text-lg font-normal text-gray-500 ">
              {openModal.text}
            </h3>
            {openModal.modalType === 'warning' && (
              <button
                onClick={handleClickConfirm}
                type="button"
                className="text-themeCream bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
            )}
            <button
              onClick={handleClick}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-themeCream focus:outline-none bg-themeGreenDark rounded-lg border-2 border-themeGreenDark hover:bg-themeGreen focus:z-10 focus:ring-1 focus:ring-themeGreenDark "
            >
              {openModal.modalType === 'warning' ? 'No, cancel' : 'Ok'}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
