import React, { ReactElement } from "react";
import HeadingFour from "./HeadingFour";

const ApproachCard = ({
  title,
  paragraph,
  icon,
}: {
  title: string;
  paragraph: ReactElement;
  icon: ReactElement;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-4">
      <div className="w-1/2 md:w-52 aspect-square bg-primary grid place-content-center text-white font-bold">
        {icon}
      </div>
      <HeadingFour position="center" text={title} />
      {paragraph}
    </div>
  );
};

export default ApproachCard;
