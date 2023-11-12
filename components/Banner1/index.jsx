import React from 'react'

export default function Banner1() {
    return (
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 font-[sans-serif]">
        <div className="relative overflow-hidden">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:py-32 lg:px-8">
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              Elegant homes
                <br className="xl:hidden" />
                <span className="text-indigo-400"> for sale</span>
              </h1>
              <p className="max-w-md mx-auto mt-4 text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
              There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.
              </p>
              <div className="mt-12 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="flex items-center justify-center w-full px-8 py-3 text-base font-semibold text-indigo-600 transition duration-150 ease-in-out bg-white rounded-md hover:text-indigo-500 hover:bg-indigo-100">
                    Get Started
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-4">
                  <button className="flex items-center justify-center w-full px-8 py-3 text-base font-semibold text-white transition duration-150 ease-in-out bg-indigo-500 rounded-md hover:bg-indigo-400">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://readymadeui.com/hotel-img.webp"
              alt="Delicious Food"
            />
          </div>
        </div>
      </div>
      

    )
}
