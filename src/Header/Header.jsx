import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id="header"
      className="flex flex-row w-full justify-between bg-header shadow-sm shadow-black py-[1rem]"
    >
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        id="left"
        className="flex flex-row items-center justify-center gap-[2rem] text-white py-[0.5rem] px-[3rem]"
      >
        <div
          id="home-button"
          className="hidden sm:flex justify-center items-center overflow-hidden cursor-pointer bg-highlight border-none rounded-[6px] w-[45px] h-[45px]"
        >
          <Link to="/">
            <svg
              className="p-[0.3rem] w-[45px] h-[45px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15 14L12 14M12 14L9 14M12 14L12 11M12 14L12 17"
                  stroke="#023047"
                  strokeWidth="2.16"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                  stroke="#023047"
                  strokeWidth="2.16"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </div>
        <div
          id="mobile-menu"
          className="sm:hidden flex justify-center items-center overflow-hidden cursor-pointer bg-highlight border-none rounded-[6px] w-[2.5rem] h-[2.5rem]"
          onClick={toggleMenu}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Menu / Hamburger_MD">
                {" "}
                <path
                  id="Vector"
                  d="M5 17H19M5 12H19M5 7H19"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div
          id="mobile-menu-open"
          className={`sm:hidden flex flex-col items-center justify-start py-30 gap-5 text-xl absolute top-0 left-0 w-1/2 h-full bg-header opacity-90 z-20 transition-transform duration-300 ease-in-out transform overflow-hidden
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Link id="home" to="/">
            <p className="hover:underline decoration-highlight cursor-pointer">
              Home
            </p>
          </Link>
          <Link id="about" to="/about#top">
            <p className="hover:underline decoration-highlight cursor-pointer">
              About
            </p>
          </Link>
          <Link id="contact" to="/about#contact-us">
            <p className="hover:underline  decoration-highlight cursor-pointer">
              Contact
            </p>
          </Link>
          <Link id="updates" to="/updates">
            <p className="hover:underline decoration-highlight cursor-pointer">
              Updates
            </p>
          </Link>
          <Link
            id="upload"
            to="https://forms.gle/2MymH9jiCXaag2947"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="hover:underline decoration-highlight cursor-pointer">
              Upload
            </p>
          </Link>
        </div>
        <div id="website-title" className="text-3xl font-bold">
          <h1 className="">Gunn Maths</h1>
        </div>
      </div>

      <div
        id="right"
        className="hidden sm:flex items-center justify-center px-[2rem] py-[0.5rem] gap-[2rem]"
      >
        <div
          id="quick-links"
          className="hidden sm:flex flex-row items-center justify-center gap-[1.5rem] text-white decoration-none"
        >
          <Link id="about" to="/about#top">
            <p className="hover:underline decoration-highlight cursor-pointer">
              About
            </p>
          </Link>
          <Link id="contact" to="/about#contact-us">
            <p className="hover:underline  decoration-highlight cursor-pointer">
              Contact
            </p>
          </Link>
          <Link id="updates" to="/updates">
            <p className="hover:underline decoration-highlight cursor-pointer">
              Updates
            </p>
          </Link>
        </div>
        <div
          id="upload-button"
          className="hidden sm:flex justify-center items-center overflow-hidden cursor-pointer bg-highlight border-none rounded-[6px] w-[45px] h-[45px]"
        >
          <a
            className=""
            href="https://forms.gle/2MymH9jiCXaag2947"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="p-[0.3rem] w-[45px] h-[45px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7"
                  stroke="#023047"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
