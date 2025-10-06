import React from "react";

type GridContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

const GridContainer = ({
  children,
  className,
  ...rest
}: GridContainerProps) => {
  return (
    <main
      className={` mx-24 grid min-h-screen grid-cols-12  gap-6  ${className}`}
      {...rest}
    >
      {children}
    </main>
  );
};

export default GridContainer;
