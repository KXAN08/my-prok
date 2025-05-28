import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { user } from '../static/index';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Users', href: '/users' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MyProfile</div>
          <nav className="hidden md:flex space-x-8 text-gray-600 text-lg font-medium">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.href} className="hover:text-blue-600 transition">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-10 h-10 object-cover border-2 border-blue-500 cursor-pointer"
              style={{ borderRadius: '40%' }}
              onClick={() => setModalOpen(true)}
            />
            <span className="text-gray-800 font-semibold hidden sm:inline-block">
              {user.name}
            </span>
            <button
              className="md:hidden text-2xl text-gray-700 ml-3"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <nav className="flex flex-col space-y-2 text-gray-600 text-lg font-medium">
              {navLinks.map((link, index) => (
                <Link key={index} to={link.href} className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-10 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-gray-200 p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={user.avatar}
              alt="Large Avatar"
              style={{ width: '500px', height: '600px', borderRadius: '10px' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Header);
