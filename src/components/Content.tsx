import React from "react";

interface IPropsType {
  children?: React.ReactNode
}

import '../styles/content.scss';

export function Content({children}: IPropsType) {
  return (
    <div className="container">
      {children}
    </div>
  );
}