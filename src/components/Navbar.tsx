import Link from "next/link";
import UserAvatar from "./UserAvatar";
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-[200] backdrop-blur-lg  bg-zinc-900/55 border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <svg
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2 text-noraml font-bold text-white">
                  Berozzgar Engineers
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <UserAvatar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
