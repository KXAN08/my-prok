import React from 'react';
import { footerLinks, socialLinks } from '../static/index.js';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const iconMap = {
    FaFacebookF: <FaFacebookF />,
    FaTwitter: <FaTwitter />,
    FaInstagram: <FaInstagram />
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">MyProfile</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-blue-600 transition">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Follow us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default  React.memo(Footer);
