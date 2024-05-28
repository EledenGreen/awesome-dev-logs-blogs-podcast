import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-4 mt-20">
      <hr className="border-gray-300 my-4" />
      <div className="max-w-7xl mx-auto flex justify-center px-4">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
