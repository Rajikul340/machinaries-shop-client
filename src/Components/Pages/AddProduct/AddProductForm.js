import React from 'react';

const AddProductForm = ({ 
    handleSubmit, 
    handleImageChange,
    preview,
    uploadButtonText,
}) => {

    return (
        <>
      <div className='flex justify-center mt-6'>
        <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
          <form
            onSubmit={handleSubmit}
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
                <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
             Product Name 
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border  rounded-md'
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border  rounded-md'
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Resale Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border  rounded-md'
                  name='ResalePrice'
                  id='ResalePrice'
                  type='number'
                  placeholder='Resale Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='Original_price' className='block text-gray-600'>
                  Original Price 
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border  rounded-md'
                  name='originalPrice'
                  id='originalPrice'
                  type='number'
                  placeholder='Original Price'
                  required
                />
              </div>
            </div>

          
              <div className='text-sm'>
                <label htmlFor='Uses' className='block text-gray-600'>
                Uses
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border  rounded-md'
                  name='Uses'
                  id='Uses'
                  type='number'
                  placeholder='Uses'
                  required
                />
           

            </div>

            <div className='flex space-x-4 items-center'>
              <label
                htmlFor='image'
                className='p-3 text-center rounded-md bg-orange-400'
              >
                {uploadButtonText}
                <input
                  type='file'
                  onChange={event => handleImageChange(event.target.files[0])}
                  name='image'
                  id='image'
                  accept='image/*'
                  hidden
                />
              </label>
              {preview && (
                <img src={preview} className='w-16 h-16' alt='preview_img' />
              )}
            </div>
            {/* <input type="file" name="image" id="image" /> */}

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 border  '
                name='description'
              ></textarea>
            </div>

            <button
              type='submit'
              className='block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-orange-500 to-orange-300 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
            >
               Save & continue
            </button>
          </form>
        </div>
      </div>
    </>
    );
};

export default AddProductForm;