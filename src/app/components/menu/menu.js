import React from 'react';
import Link from 'next/link';  
import { FaMusic, FaHeart, FaQuestion, FaHome } from 'react-icons/fa';  
import './menu.css'; 

const Menu = () => {
  return (
    <div className="menu">
      <ul>
      <li>
          <Link href="/">
            <span className="pill"><FaHome /></span>
          </Link>
        </li>
        <li>
          <Link href="/music">
            <span className="pill"><FaMusic /></span>
          </Link>
        </li>
        <li>
        </li>
        <li>
          <Link href="/something-something">
            <span className="pill"><FaQuestion /></span>
          </Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Menu;
