"use client";

import React, { useState } from 'react';
import { AssistCardResearch } from './Research';

const ModalComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  // Close modal when pressing ESC key
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <button
        className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition"
        onClick={openModal}
      >
        Click to Open modal
      </button>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
          <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-4xl">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 pt-0 text-center">
              <h2 className="text-3xl font-semibold text-red-500  mb-6">
                Our Assistant
              </h2>
              <div className="max-h-auto overflow-y-hidden ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <AssistCardResearch />
                
                  {/* Tambahkan komponen <AssistCardResearch /> sebanyak yang dibutuhkan */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
