const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-4 mt-20">
      <hr className="border-gray-300 my-4" />
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        <p className="mb-4">Share your favourite logs/blogs by making a PR</p>
        <a
          href="https://github.com/EledenGreen/awesome-dev-logs-and-blogs/"
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          (* v *)/
        </a>
      </div>
    </footer>
  )
}

export default Footer
