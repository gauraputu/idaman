import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";

const Navbar = () => (
  <>
    <nav className="bg-white ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
              >
                PSBAlter
              </a>
              <a
                href="/sop"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                SOP
              </a>
              <a
                href="/sop2"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                SOP2
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
