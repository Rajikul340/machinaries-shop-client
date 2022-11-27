import React from 'react';

const AdminRequestForm = ({handleSubmit}) => {

    return (
        <>
        <div className='flex justify-center mt-6'>
          <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
            <form
              onSubmit={handleSubmit}
              className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
              <div className='space-y-1 text-sm'>
                <label htmlFor='location' className='block text-gray-600'>
                  Location
                </label>
                <input
                  className='w-full px-4 py-3 rounded-md'
                  name='location'
                  id='location'
                  type='text'
                  placeholder='Location'
                  required
                />
              </div>
  
              <p>photo</p>
  
              <div className='flex space-x-4 items-center'>
                <label
                  htmlFor='image'
                  className='p-3 text-center rounded-md cursor-pointer'
                >
                  <input
                    type='file'
                    name='image'
                    id='image'
                    accept='image/*'
                  
                  />
                </label>
              </div>
  
              <div>
                <label className='flex items-center'>
                  <input type='checkbox' className='form-checkbox' required />
                  <span className='block ml-2 text-xs font-medium text-gray-700 cursor-pointer'>
                    Agree to Privacy Policy
                  </span>
                </label>
              </div>
  
              <button
                type='submit'
                className='block w-full p-3 text-center font-medium bg-orange-300 '
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </>
    );
};

export default AdminRequestForm;