function About() {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='h-12 w-12 text-secondary'
                >
                  <path d='m8 3 4 8 5-5 5 15H2L8 3z'></path>
                </svg>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl text-gray-800'>
                  About Gada Electronics
                </h1>
                <p className='max-w-3xl text-gray-600 text-lg md:text-xl lg:text-base'>
                  Your Trusted Destination for Quality Electronics and
                  Exceptional Service
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className='flex justify-center '>
          <section className='lg:w-3/4 w-10/12 py-12    '>
            <div className='rounded-lg border h-fit bg-gray-50 text-gray-800 shadow-md flex lg:flex-row flex-col items-start space-y-4 p-4'>
              <div className='lg:w-1/2 w-full'>
                <img
                  src='/jethalal.jpeg'
                  alt='Jethalal Gada'
                  className=' rounded-lg w-full  object-cover'
                />
              </div>
              <div className=' lg:w-1/2 w-full h-full flex-row justify-evenly gap-11 px-4'>
                <h2 className='text-3xl font-bold my-2'>
                  Jethalal Champaklal Gada
                </h2>
                <p className='text-gray-600 text-lg font-semibold my-1'>
                  Owner
                </p>

                <p className='text-gray-600 text-lg leading-relaxed text-justify my-2'>
                  Hello! I'm Jethalal Champaklal Gada, the proud owner of Gada
                  Electronics in Mumbai. Our shop offers a wide range of
                  electronics, from the latest gadgets to essential home
                  appliances. We prioritize quality products and excellent
                  customer service, which has helped us build a loyal customer
                  base. Running Gada Electronics has its challenges, especially
                  in the fast-paced tech market, but with the support of my
                  family and my assistant Natu Kaka, we stay ahead. My business
                  is rooted in trust and relationships, and I treat my customers
                  like family. Living in Gokuldham Society adds a unique charm
                  to my life, surrounded by supportive neighbors and friends.
                  For me, Gada Electronics is more than a business—it's a dream
                  I've nurtured with dedication and hard work.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className='w-full py-12   bg-white'>
          <div className=' gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16'>
            <div className='lg:flex flex-row w-full gap-10'>
              <div className='rounded-lg border lg:w-1/2 bg-gray-50 text-gray-800 shadow-md flex lg:flex-row flex-col-reverse items-center p-4'>
                <div className='lg:w-1/2 w-full  px-3 my-2'>
                  <h3 className='text-xl font-bold'>
                    Natwarlal Prabhashankar Undhaiwala aka Nattu Kaka
                  </h3>
                  <p className='text-gray-600 font-semibold'>Manager</p>
                  <p className='text-gray-700 leading-relaxed text-justify'>
                    Hello! I am Natwarlal Prabhashankar Undhaiwala, but everyone
                    calls me Natu Kaka. I have been the loyal and dedicated
                    assistant at Gada Electronics for many years. Working
                    alongside Jethalal Champaklal Gada, I have seen the shop
                    grow and flourish into the trusted business it is today.
                  </p>
                </div>
                <div className='lg:w-1/2 w-full'>
                  <img
                    src='/natukaka.jpeg'
                    alt='Natu Kaka'
                    className='lg:rounded-l-full rounded-lg w-full  object-cover'
                  />
                </div>
              </div>
              <div className='rounded-lg border lg:w-1/2 w-full  bg-gray-50 text-gray-800 shadow-md flex lg:flex-row flex-col items-center p-4'>
                <div className='lg:w-1/2 w-full '>
                  <img
                    src='/baghaa.jpeg'
                    alt='Natu Kaka'
                    className='lg:rounded-r-full rounded-lg w-full   object-cover'
                  />
                </div>
                <div className='lg:w-1/2 w-full  px-3 my-2'>
                  <h3 className='text-xl font-bold'>
                    Bagheshwar Dadukh Undhaiwala aka Bagha
                  </h3>
                  <p className='text-gray-600 font-semibold'>Manager</p>
                  <p className='text-gray-700 leading-relaxed text-justify'>
                    Hello! I am Bagheshwar Dadukh Undhaiwala, but everyone calls
                    me Bagha. I am proud to be a key member of the Gada
                    Electronics team, working alongside Jethalal Champaklal Gada
                    and my uncle, Natu Kaka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
