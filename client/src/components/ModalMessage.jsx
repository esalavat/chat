import React from "react";

const ModalMessage = ({message, title, closeModal}) => {
    return (
        <>
        { message && 
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div className="mt-3 text-center">
                        {title && 
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                        }
                        <div className="mt-2 px-7 py-3">
                            <p className="text-sm text-gray-500">
                                {message}
                            </p>
                        </div>
                        <div className="items-center px-4 py-3">
                            <button onClick={closeModal} className="px-4 py-2 bg-sky-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default ModalMessage;