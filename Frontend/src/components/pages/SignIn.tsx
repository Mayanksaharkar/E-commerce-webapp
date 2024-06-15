import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

function SignIn() {
  const { login } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(user);
    login(user);
  };
  return (
    <div className='min-h-screen bg-white  py-6 flex flex-col justify-center sm:py-12 '>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto w-full'>
        <div className='absolute inset-0 bg-gradient-to-r from-primary-content to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <form className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <h2 className='text-center text-base-content'>Gada Electronics</h2>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='lg:text-2xl text-lg font-semibold'>Sign In</h1>
            </div>
            <div className='divide-y divide-gray-200'>
              <div className='py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='email'
                    name='email'
                    type='text'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Email address'
                    value={user.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor='email'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Email Address
                  </label>
                </div>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='password'
                    name='password'
                    type='password'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Password'
                    value={user.password}
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
                  <button
                    className='bg-secondary-content text-white rounded-md px-2 py-1'
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                      setUser({
                        email: "",
                        password: "",
                      });
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className='text-center'>
                  Not Registered yet! <span>Sign Up</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;