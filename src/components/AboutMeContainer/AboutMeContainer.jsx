import React from "react";

import UserProfileComponent from "../UserProfile/UserProfileComponent";

const AboutMeContainer = () => {
  const work = {
    name: "BPIUM",
    catchPhrase: "",
    bs: "frontend developer",
  };
  const address = {
    city: "Kazan",
    street: "Big street",
    suite: "apartment",
    zipcode: "92998-3874",
  };
  return (
    <UserProfileComponent
      avatar="https://sun21-1.userapi.com/impg/YjArxJXNIxWIwM16AP15RMlpep9sGSaEA_e8iQ/UFxjk02wIEE.jpg?size=979x979&quality=95&sign=1e828edf52c55c8f7824eba976579a82&type=album"
      email="muazzelinkic@gmail.com"
      name="Muaz Zelinkich"
      phone="8 (900) 416 69 49"
      username="uxknzm"
      website="https://t.me/uxknzm"
      address={address}
      company={work}
    />
  );
};

export default AboutMeContainer;
