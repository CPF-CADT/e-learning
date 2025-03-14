export default function Nav() {
    return (
      <header>
        <nav className="bg-[#0077b6] px-10">
          <div className="container max-w-[85%] mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-2xl max-h-[65px]">
              Academic Skill<br />
              <span className="text-xs">Development Center</span>
            </div>
  
            <div className="flex-grow mx-4 ">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-[50%] px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              />
            </div>
  
            <div className="flex items-center gap-3">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
                Login
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Sign UP
              </button>
            </div>
          </div>
        </nav>
  
        <div className="bg-[#fff] py-2">
          <div className="container mx-auto flex justify-center space-x-6 text-black font-medium">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Course
            </a>
            <a href="#" className="hover:underline">
              Books
            </a>
            <a href="#" className="hover:underline">
              My Learning
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
          </div>
        </div>
      </header>
    );
  }
  