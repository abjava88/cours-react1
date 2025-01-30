import React from "react";
import Avatar from "./Avatar";

const Profile = () => {
  const handleClick = (name) => {
    console.log(`Avatar ${name} clicked`);
  };

  return (
    <div>
      <Avatar
        person={{
          name: "Aklilu Lemma",
          imageUrl:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
        }}
        size={100}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Profile;