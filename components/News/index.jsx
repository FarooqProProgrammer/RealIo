import { servicessection } from '@/Data'
import React from 'react'

export default function News() {
    return (
        <>
            {/* component */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto max-w-7x1">
                    <div className="flex flex-wrap w-full p-4 mb-4">
                        <div className="w-full mb-6 lg:mb-0">
                            <h1 className="mb-2 text-5xl font-bold text-gray-900 sm:text-4xl title-font">
                                News
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {servicessection?.map((item) => {
                            return (
                                <div key={item.id} className="p-4 xl:w-1/3 md:w-1/2">
                                    <div className="p-6 bg-white rounded-lg">
                                        <img
                                            className="object-cover object-center w-full mb-6 rounded lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72"
                                            src={item.img}
                                            alt="Image Size 720x400"
                                        />
                                        <h3 className="text-xs font-medium tracking-widest text-indigo-500 title-font">
                                           {item.category}
                                        </h3>
                                        <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                                            {item.title}
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}



                    </div>
                </div>
            </section>
        </>

    )
}
