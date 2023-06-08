import React from "react";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const DashBoardHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <SectionTitle
        heading={"Welcome"}
        subheading={user?.displayName}
      ></SectionTitle>
    </div>
  );
};

export default DashBoardHome;
