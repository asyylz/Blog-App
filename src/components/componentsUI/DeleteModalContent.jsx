import React from 'react';
import { useSubmit } from 'react-router-dom';

const DeleteModalContent = ({ setOpenModal, openModal, id }) => {

  const submit = useSubmit();
  const handleClickConfirm = async () => {
    submit({ id: id, actionType: 'delete' }, { method: 'delete' });
  };

  const handleClick = () => {
    setOpenModal({ text: '', modalType: '', status: false });
  };

  return (
    <>
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
    </>
  );
};

export default DeleteModalContent;
