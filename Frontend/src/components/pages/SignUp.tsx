import { useState, useContext, useEffect } from "react";
import { NewUser } from "../../Models/User";
import { AuthContext } from "../../context/Auth/AuthContext";
function SignUp() {
  const { register } = useContext(AuthContext);
  const [newUser, setNewUser] = useState<NewUser>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Validation logic: Check if all required fields are filled and passwords match
    const isValid =
      newUser.fname !== "" &&
      newUser.lname !== "" &&
      newUser.email !== "" &&
      newUser.password !== "" &&
      newUser.password === newUser.rePassword;

    setFormValid(isValid);
  }, [newUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setNewUser({
      fname: "",
      lname: "",
      email: "",
      password: "",
      rePassword: "",
    });
    setFormValid(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      register(newUser);
      handleClear(); // Optionally clear the form after successful submission
    } else {
      console.log("Form is not valid. Cannot submit.");
    }
  };

  return (
    <div className='min-h-screen bg-white  py-6 flex flex-col justify-center sm:py-12 '>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto w-full'>
        <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary-content shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <h2 className='text-center text-base-content'>Gada Electronics</h2>
          <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
            <div>
              <h1 className='lg:text-2xl text-lg font-semibold'>Sign Up</h1>
            </div>
            <div className='divide-y divide-gray-200'>
              <div className='py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7  '>
                <div className='flex gap-3'>
                  <div className='relative w-full'>
                    <input
                      id='fname'
                      name='fname'
                      type='text'
                      value={newUser?.fname}
                      onChange={handleChange}
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
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
                      id='lname'
                      name='lname'
                      type='lname'
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                      value={newUser?.lname}
                      onChange={handleChange}
                      required
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
                    id='email'
                    name='email'
                    type='email'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    value={newUser?.email}
                    onChange={handleChange}
                    required
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
                    id='password'
                    name='password'
                    type='password'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    value={newUser?.password}
                    onChange={handleChange}
                    required
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
                    id='rePassword'
                    name='rePassword'
                    type='password'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    value={newUser?.rePassword}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor='repassword'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Re-write Password
                  </label>
                </div>
                <div className='flex justify-center w-full items-center'>
                  <button
                    className='bg-base-300 text-neutral rounded-md px-3 py-1 mx-4 '
                    onClick={() => {
                      handleClear();
                    }}
                  >
                    Clear
                  </button>
                  <button
                    type='submit'
                    className={`${!formValid ? "btn-disabled cursor-not-allowed" : "btn bg-neutral text-primary px-4"}`}
                    disabled={!formValid}
                  >
                    Submit
                  </button>
                </div>
                <div className='text-center'>
                  Already Registered ? <span>Sign In</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
