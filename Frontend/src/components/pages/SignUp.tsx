import { useState, useContext, useEffect } from "react";
import { NewUser } from "../../Models/User";
import { AuthContext } from "../../context/Auth/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();

  const { register, isLoggedIn } = useContext(AuthContext);
  const [newUser, setNewUser] = useState<NewUser>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      newUser.fname !== "" &&
      newUser.lname !== "" &&
      newUser.email !== "" &&
      newUser.password !== "" &&
      newUser.password === newUser.rePassword;

    setFormValid(isValid);
  }, [newUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async () => {
    if (formValid) {
      const res = await register(newUser);

      if (res === 200) {
        toast.success("Account Created");
        handleClear();
        navigate("/user/profile");
      } else {
        toast.error("Somthing Went Wrong");
      }
    } else {
      toast.error("Form is not valid. Cannot submit.");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className='w-full h-full flex items-center justify-center'>
          <span className='text6xl'>Already Logged In</span>
        </div>
      ) : (
        <div className='min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12'>
          <div className='relative py-3 sm:max-w-xl sm:mx-auto w-full'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary-content to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
            <form
              className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className='max-w-md mx-auto'>
                <div>
                  <h1 className='lg:text-2xl text-lg font-semibold mb-4'>
                    Sign Up
                  </h1>
                </div>
                <div className='divide-y divide-gray-200'>
                  <div className='py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                    <div className='flex gap-3'>
                      <div className='relative w-full'>
                        <input
                          id='fname'
                          name='fname'
                          type='text'
                          value={newUser.fname}
                          onChange={handleChange}
                          className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                          required
                        />
                        <label
                          htmlFor='fname'
                          className='absolute left-0 -top-2 text-sm'
                        >
                          First Name
                        </label>
                      </div>
                      <div className='relative w-full'>
                        <input
                          id='lname'
                          name='lname'
                          type='text'
                          className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                          value={newUser.lname}
                          onChange={handleChange}
                          required
                        />
                        <label
                          htmlFor='lname'
                          className='absolute left-0 -top-2 text-sm'
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
                        className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                        value={newUser.email}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor='email'
                        className='absolute left-0 -top-2 text-sm'
                      >
                        Email
                      </label>
                    </div>
                    <div className='relative'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                        value={newUser.password}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor='password'
                        className='absolute left-0 -top-2 text-sm'
                      >
                        Password
                      </label>
                    </div>
                    <div className='relative'>
                      <input
                        id='rePassword'
                        name='rePassword'
                        type='password'
                        className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                        value={newUser.rePassword}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor='rePassword'
                        className='absolute left-0 -top-2 text-sm'
                      >
                        Re-write Password
                      </label>
                    </div>
                    <div className='flex justify-center w-full items-center'>
                      <button
                        type='reset'
                        className='bg-base-300 text-neutral btn-ghost rounded-md mx-4 px-3 py-1'
                        onClick={handleClear}
                      >
                        Clear
                      </button>
                      <button
                        type='submit'
                        className='btn-ghost px-3 py-1 border rounded-md text-base-100 bg-secondary'
                      >
                        Submit
                      </button>
                    </div>
                    <div className='text-center'>
                      Already Registered?{" "}
                      <Link className='link' to={"/signin"}>
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
