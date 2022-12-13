import React from "react";

export default function Modal({ visible, onClose}) {
    const handleOnClose = () => {
        onClose();
    };

    if (!visible) return null;
    return (
        <div onClick={handleOnClose}>
        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items[...]-end justify-center min-h-screen pt-[35vh] px-4 pb-[65vh] text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <button id="closeModal" className="" onClick={onClose}>x</button>

                            <div class="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Share Form as:
                                </h3>
                                <div class="mt-2">
                                    <div class="flex items-center mt-6">
                                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                        <label for="default-radio-1" class="ml-2 text-lg font-medium text-gray-900 dark:text-black">Public Form</label>
                                        
                                    </div>
                                    <p className="pl-6 pr-10 mb-4 text-sm">
                                        Public forms will be shown at Home Menu but still can be find by entering Token number.
                                    </p>
                                    <div class="flex items-center">
                                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                        <label for="default-radio-2" class="ml-2 text-lg font-medium text-gray-900 dark:text-black">Private Form</label>
                                    </div>
                                    <p className="pl-6 pr-10 mb-4 text-sm">
                                        Private forms will not be shown at Home Menu, instead user can find it by entering Token number by sharing it
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mr-4 px-2 py-3 flex float-right items-end sm:px-6 sm:flex sm:flex-row-reverse">
                        <button id="ShareForm" type="button" class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-7 py-2 bg-stone-300 text-base font-medium text-black hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Share Form
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}