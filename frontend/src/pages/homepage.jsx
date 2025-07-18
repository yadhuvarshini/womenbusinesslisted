import React from 'react'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import AllBusinessCarousel from './featuredlisting.jsx'

const Homepage = () => {
  const features = [
    {
      name: 'Better UI.',
      description:
        'Smooth. Seamless. Sophisticated.',
      
    },
    {
      name: 'Get Ready for Elevator Pitch',
      description:
        'A platform that empowers you to showcase your business to investors, your way.',
      
    },
    {
      name: 'Smarter Features.',
      description:
        'Designed around you. Built to grow with you',
      
    },
    {
      name: 'Stronger Security.',
      description:
        'Because your story, your presence — deserves to be protected.',
      
    }
  ]
  return (
    <div>
      <Navbar></Navbar>
      {/* hero section - 1 */}
      <div className='bg-white text-center'>
        <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0'>
            <svg
              viewBox='0 0 1024 1024'
              aria-hidden='true'
              className='absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                fillOpacity='0.7'
              />
              <defs>
                <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                  <stop stopColor='#7775D6' />
                  <stop offset={1} stopColor='#E935C1' />
                </radialGradient>
              </defs>
            </svg>
            <div className='bg-gray-900 flex items-center justify-center px-6 py-16 sm:px-16 lg:px-24'>
              <div className='text-center max-w-2xl'>
                <h2 className='text-4xl font-bold text-white sm:text-5xl'>
                  We Are Back
                </h2>
                <p className='mt-6 text-lg text-gray-300 font-semibold leading-relaxed px-10'>
                  You expected more — we heard you. <br />
                  We’ve taken a step back — not to pause, but to prepare.
                  <br />
                  <br />
                  To rebuild. To realign. To rise.
                </p>
                {/* <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
              >
                Get Started
              </a>
              <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <AllBusinessCarousel />
      {/* hero section - 2 */}

      <div className='bg-white sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base/7 font-semibold text-indigo-600'>
              PHASE #2
            </h2>
            <p className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance'>
              What's Changing
            </p>
            <p className='mt-6 text-lg/8 text-gray-700'>Show Yourself. Own Your Pride.
              This is your time to shine — on your terms, in your words.

              We’re not just building a platform.
              We’re building a movement.</p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
<dl className="grid grid-cols-1 gap-y-10 sm:gap-y-12 text-center max-w-xl mx-auto lg:grid-cols-2 lg:max-w-4xl lg:text-left">
             {features.map(feature => (
                <div key={feature.name} className='relative px-4'>
                  <dt className='text-lg font-semibold text-gray-900'>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-sm text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>


      {/* footer section */}
      <Footer></Footer>
    </div>
  )
}

export default Homepage
