import React from "react";

import '../styles/sidebar.scss';

interface IPropsTypes {
  children?: React.ReactNode
}

export function SideBar({ children }: IPropsTypes) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {children}
      </div>
    </nav>
  );
}