import React, { ReactNode } from "react";

const Bold = ({ children }: { children: ReactNode }) => {
  return <span className="font-bold text-primary">{children}</span>;
};

export default Bold;
