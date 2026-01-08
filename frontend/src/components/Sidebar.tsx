import React from 'react';
import svgPaths from "../imports/svg-eoxo8t85xb";
import imgLogo from "figma:asset/e1e23a9c3f1b2bbc7822de5ffc698586c42b95c5.png";

interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="sidebar">
      {/* Close button for mobile */}
      <button className="sidebar-close d-lg-none" onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Logo */}
      <div className="sidebar-logo">
        <img src={imgLogo} alt="Logo" className="logo-image" />
        <span className="logo-text">Logo</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {/* Dashboard - Active */}
        <div className="nav-item active">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d={svgPaths.p2c853180} fill="#236EFF" />
          </svg>
          <span>Dashboard</span>
        </div>

        {/* Transaction */}
        <div className="nav-item">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d={svgPaths.p3ea23900} stroke="#767676" strokeWidth="3" />
          </svg>
          <span>Transaction</span>
        </div>

        {/* Account */}
        <div className="nav-item">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="10" r="5" stroke="#767676" strokeWidth="2" fill="none" />
            <path d="M5 25c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#767676" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          <span>Account</span>
        </div>

        {/* Budget */}
        <div className="nav-item">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g>
              <path d="M6.5 10.2507H11.5" stroke="#767676" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p3a46b700} stroke="#767676" strokeWidth="3" />
              <path d={svgPaths.p2bf5b600} stroke="#767676" strokeWidth="3" />
              <path d={svgPaths.p1b7b2a40} stroke="#767676" strokeLinecap="round" strokeWidth="3" />
              <path d="M21.4888 15.2507H21.5013" stroke="#767676" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </g>
          </svg>
          <span>Budget</span>
        </div>

        {/* Settings */}
        <div className="nav-item">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d={svgPaths.pda51800} fill="#767676" />
          </svg>
          <span>Settings</span>
        </div>

        {/* Help */}
        <div className="nav-item">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d={svgPaths.pef35680} fill="#767676" />
          </svg>
          <span>Help</span>
        </div>
      </nav>
    </div>
  );
}