import React from "react";

interface Pageprops {
  title: string;
  children: React.ReactNode;
}

const PageStruct = ({ title, children }: Pageprops) => {
  return (
    <div className="text-sm">
      <h1 className="text-2xl font-extrabold text-center ">{title}</h1>
      {children}
    </div>
  );
};

export default PageStruct;
