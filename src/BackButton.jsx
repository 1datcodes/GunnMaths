import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getParentPath = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        if (pathSegments.length > 0) {
            pathSegments.pop();
            return `/${pathSegments.join('/')}`;
        }
        return '/';
    }

    const handleBack = () => {
        const parentPath = getParentPath();
        navigate(parentPath);
    }

    return (
        <div id="back-button" onClick={() => handleBack()} className='w-[1.5rem] h-[1rem] bg-highlight border-black shadow-sm shadow-black py-[0.5rem] px-[1rem] flex items-center justify-center cursor-pointer rounded-[12px] transition-all duration-300 ease-in-out text-[0.75rem]'>
            <svg
        fill="#023047"
        height="24"
        width="24"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 386 386"
        xmlSpace="preserve"
        stroke="#000000"
        strokeWidth="1"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path
              id="Arrow_Back"
              d="M374.212,182.3H39.432l100.152-99.767c4.704-4.704,4.704-12.319,0-17.011 c-4.704-4.704-12.319-4.704-17.011,0L3.474,184.61c-4.632,4.632-4.632,12.379,0,17.011l119.1,119.1 c4.704,4.704,12.319,4.704,17.011,0c4.704-4.704,4.704-12.319,0-17.011L39.432,206.36h334.779c6.641,0,12.03-5.39,12.03-12.03 S380.852,182.3,374.212,182.3z"
            ></path>{" "}
            <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
          </g>{" "}
        </g>
      </svg>
        </div>
    )
};

export default BackButton;