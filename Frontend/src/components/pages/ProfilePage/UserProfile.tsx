import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/User/UserContext";
import { toast } from "react-toastify";

function UserProfile() {
  const { fetchUserInfo, userInfo, setUserInfo, updateInfo } =
    useContext(UserContext);

  const handleUpdateClick = async () => {
    const res = await updateInfo();
    if (res === 200) {
      toast.success("Data Updated");
    } else toast.error("Somthing went Wrong");
  };

  useEffect(() => {
    fetchUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id='vtvqen7gwi' className='container mx-auto px-4 md:px-6 py-12'>
        <div className='max-w-3xl mx-auto text-secondary'>
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
                    type='Number'
                    value={userInfo?.mobile_no}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserInfo({
                        ...userInfo,
                        mobile_no: Number(e.target.value),
                      });
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
                    placeholder='Enter your pincode'
                    type='Number'
                    value={userInfo?.pincode}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserInfo({
                        ...userInfo,
                        pincode: Number(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <button
                className=' bg-secondary text-base-300 btn'
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdateClick();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
