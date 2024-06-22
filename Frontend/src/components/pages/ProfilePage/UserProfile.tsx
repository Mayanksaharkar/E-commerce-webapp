import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/User/UserContext";

function UserProfile() {
  const { fetchUserInfo, userInfo, setUserInfo, updateInfo } =
    useContext(UserContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <div id='vtvqen7gwi' className='container mx-auto px-4 md:px-6 py-12'>
        <div className='max-w-3xl mx-auto'>
          <div className='space-y-8'>
            <div>
              <h1 className='text-3xl font-bold'>Personal Information</h1>
              <p className='text-muted-foreground'>
                Update your account details.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='name'
                  >
                    Name
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='name'
                    placeholder='Enter your name'
                    value={userInfo?.name}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserInfo({ ...userInfo, name: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='email'
                    placeholder='Enter your email'
                    type='email'
                    value={userInfo?.email}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserInfo({ ...userInfo, email: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='space-y-4'>
                <div>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='address'
                  >
                    Address
                  </label>
                  <textarea
                    className='flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]'
                    id='address'
                    placeholder='Enter your address'
                    value={userInfo?.address}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserInfo({ ...userInfo, address: e.target.value });
                    }}
                  ></textarea>
                </div>
                <div>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='phone'
                  >
                    Phone
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='phone'
                    placeholder='Enter your phone'
                    type='tel'
                    value={userInfo?.mobile_no}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserInfo({ ...userInfo, mobile_no: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='phone'
                  >
                    Pincode
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='phone'
                    placeholder='Enter your phone'
                    type='tel'
                    value={userInfo?.pincode}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserInfo({ ...userInfo, pincode: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <button
                className='btn inline-flex items-center justify-center bg-primary-content whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-white hover:bg-secondary/90 h-10 px-4 py-2'
                onClick={(e) => {
                  e.preventDefault();
                  updateInfo();
                }}
              >
                Save Changes
              </button>
            </div>

            <div
              data-orientation='horizontal'
              role='none'
              className='shrink-0 bg-border h-[1px] w-full'
            ></div>
            <div>
              <h2 className='text-2xl font-bold'>Change Password</h2>
              <p className='text-muted-foreground'>
                Update your account password.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      htmlFor='current-password'
                    >
                      Current Password
                    </label>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      id='current-password'
                      placeholder='Enter your current password'
                      type='password'
                    />
                  </div>
                  <div>
                    <label
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      htmlFor='new-password'
                    >
                      New Password
                    </label>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      id='new-password'
                      placeholder='Enter your new password'
                      type='password'
                    />
                  </div>
                </div>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      htmlFor='confirm-password'
                    >
                      Confirm Password
                    </label>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      id='confirm-password'
                      placeholder='Confirm your new password'
                      type='password'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
