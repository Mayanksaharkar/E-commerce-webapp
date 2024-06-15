import { useState } from "react";

function SignUp() {
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    repass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='min-h-screen bg-white  py-6 flex flex-col justify-center sm:py-12 '>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto w-full'>
        <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary-content shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <h2 className='text-center text-base-content'>Gada Electronics</h2>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='lg:text-2xl text-lg font-semibold'>Sign Up</h1>
            </div>
            <div className='divide-y divide-gray-200'>
              <div className='py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7  '>
                <div className='flex gap-3'>
                  <div className='relative w-full'>
                    <input
                      autoComplete='off'
                      id='fname'
                      name='fname'
                      type='text'
                      value={newUser.fname}
                      onChange={handleChange}
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                      placeholder='First Name'
                    />
                    <label
                      htmlFor='fname'
                      className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                    >
                      First Name
                    </label>
                  </div>

                  <div className='relative w-full'>
                    <input
                      autoComplete='off'
                      id='lname'
                      name='lname'
                      type='lname'
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                      placeholder='Last Name'
                      value={newUser.lname}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor='lname'
                      className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='email'
                    name='email'
                    type='email'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Email'
                    value={newUser.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor='email'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Email
                  </label>
                </div>

                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='password'
                    name='pass'
                    type='password'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Password'
                    value={newUser.pass}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor='password'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Password
                  </label>
                </div>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='repassword'
                    name='repass'
                    type='password'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Password'
                    value={newUser.repass}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor='repassword'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Re-write Password
                  </label>
                </div>
                <div className='flex justify-center w-full items-center'>
                  <button className='bg-base-300 text-neutral rounded-md px-3 py-1 mx-4 '>
                    Clear
                  </button>
                  <button className='bg-neutral text-white  rounded-md px-2 py-1 mx-4'>
                    Submit
                  </button>
                </div>
                <div className='text-center'>
                  Already Registered ? <span>Sign In</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
