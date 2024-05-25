import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? 'rgb(58, 156, 108)' : 'rgb(58, 156, 108)' }}>
            {/* Left Content  */}
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                {/* Blog Logo  */}
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {/* logo  */}
                    <img className='w-10'
                        src="data:image/jpeg;base64,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" alt="logo"
                    />
                    {/* logo text  */}
                    <span className="ml-3 text-xl text-white">
                        ByteBlog
                    </span>
                </div>

                {/* items  */}
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2023  ByteBlog—
                    <a
                        href="https://twitter.com/knyttneve"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @ByteBlog

                    </a>
                </p>
                
                {/* Right item  */}
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {/* Icon 1  */}
                    <a className="text-gray-500">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </a>

                    {/* Icon 2  */}
                    <a className="ml-3 text-gray-500">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>

                    {/* Icon 3  */}
                    <a className="ml-3 text-gray-500">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                    </a>

                    {/* Icon 4  */}
                    <a className="ml-3 text-gray-500">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            />
                            <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>

    )
}

export default Footer