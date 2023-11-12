"use client"
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })


    return (
        <header className="font-sans shadow-md">
            <section className="py-2 bg-[#007bff] text-white text-right px-10">
                <p className="text-sm">
                    <strong className="mx-2">Address:</strong>SWF New York 185669
                    <strong className="mx-2">Contact No:</strong>1800333665
                </p>
            </section>
            <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 relative bg-white min-h-[70px]">
                <a href="javascript:void(0)">
                    <img
                        src="https://readymadeui.com/readymadeui.svg"
                        alt="logo"
                        className="w-36"
                    />
                </a>
                <div className="flex max-lg:ml-auto lg:order-1">
                    <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-7 h-7"
                            fill="#000"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {
                    !isTabletOrMobile && <ul className="flex lg:space-x-4 max-lg:space-y-2 max-lg:block max-lg:w-full">
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
                            >
                                Home
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Team
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Feature
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Blog
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                About
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Source
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Partner
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                More
                            </a>
                        </li>
                    </ul>
                }
                {
                    isOpen && isTabletOrMobile && <ul className="flex lg:space-x-4 max-lg:space-y-2 max-lg:block max-lg:w-full">
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
                            >
                                Home
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Team
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Feature
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Blog
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                About
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Source
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                Partner
                            </a>
                        </li>
                        <li className="px-3 max-lg:border-b max-lg:py-2 max-lg:rounded">
                            <a
                                href="javascript:void(0)"
                                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
                            >
                                More
                            </a>
                        </li>
                    </ul>
                }

            </div>
        </header>

    )
}
