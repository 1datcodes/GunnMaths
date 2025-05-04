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
        <div id="back-button" onClick={() => handleBack()} className='w-fit h-fit bg-highlight border-1 border-black shadow-sm/20 shadow-black py-[0.5rem] px-[1rem] cursor-pointer rounded-[12px] transition-all duration-300 ease-in-out hover:scale-110'>
          <svg className='w-[1.25rem]' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#023047" stroke="#023047" strokeWidth="25"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#023047" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#023047" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg> 
        </div>
    )
};

export default BackButton;