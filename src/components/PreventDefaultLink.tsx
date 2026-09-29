"use client";

import React from "react";

interface PreventDefaultLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function PreventDefaultLink({ children, ...props }: PreventDefaultLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        e.preventDefault();
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </a>
  );
}
