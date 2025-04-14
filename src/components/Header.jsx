// components/Header.jsx
import React from 'react';
import Link from 'next/link';
import '@/styles/header.scss'; // Assuming you have a CSS file for styles

export default function Header() {
  return (
    <header className="header">
      <img src="/DC_Comics_2024.png" alt="Marvel" className="logo"/>
      <nav className="nav">
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/'}>Movies</Link></li>
          <li><Link href={'/'}>Games</Link></li>
          <li><Link href={'/'}>Comic</Link></li>
          <li><Link href={'/'}>Character</Link></li>
          <li><Link href={'/'}>News</Link></li>
          <li><Link href={'/'}>More</Link></li>
        </ul>
      </nav>
    </header>
  );
}