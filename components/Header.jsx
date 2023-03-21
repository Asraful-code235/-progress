import Link from 'next/link';
import React from 'react';

const HeaderComponent = () => {
  return (
    <header className="w-screen border-b bg- fixed top-0 left-0 right-0 z-50 backdrop:blur-sm bg-[#7829df]">
      <nav className=" w-5/6 mx-auto  flex justify-between gap-16 items-center py-8">
        {/* left side */}
        <div className="flex items-center w-full justify-between gap-16">
          <Link
            href={'/'}
            className=" flex-1 font-bold text-2xl  cursor-pointer text-white  "
          >
            Logo
          </Link>
          {/* nav items */}
          <ul className="flex gap-4 items-center justify-center">
            {['home', 'posts', 'login'].map((links) => {
              return (
                <Link
                  href={`${links !== 'home' ? `/${links}` : '/'}`}
                  className="capitalize text-white  hover:text-gray-400 transition-colors duration-500"
                  key={links}
                >
                  {links}
                </Link>
              );
            })}
          </ul>
        </div>
        {/*right side */}
        <div>
          <button className="bg-white text-[#7829df] font-semibold px-3  py-2 rounded-md hover:drop-shadow-sm transition-colors duration-500">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
