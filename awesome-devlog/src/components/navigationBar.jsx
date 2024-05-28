import { useState } from 'react'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          Best dev logs & blogs
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <li>
            <a
              href="https://github.com/EledenGreen/awesome-dev-logs-and-blogs/blob/main/documentation.md"
              className="text-gray-300 hover:text-white"
            >
              Documentation
            </a>
          </li>
        </ul>
      </div>
      <hr className="border-gray-300 my-4" />
    </nav>
  )
}

export default NavigationBar
