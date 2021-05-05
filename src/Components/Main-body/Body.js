import React, { useState } from "react";
import AddedFrineds from "../AddedFriends/AddedFrineds";
import Findfriends from "../Findfrineds/Findfriends";
import fakeData from "../../Fakedata/fakeData.json";
import "./Body.css";

const Body = () => {
  const [count, setCount] = useState([]);

  const addedFrined = (info) => {
    const newFriend = [...count, info];
    setCount(newFriend);
  };
  return (
    <div>
      <div className="bodysDiv">
        <div>
          {/* {user.map((info) => (
            <Findfriends
              information={info}
              key={info.id}
              addedFrined={addedFrined}
            ></Findfriends>
          ))} */}

          {fakeData.map((info) => (
            <Findfriends
              information={info}
              key={info.id}
              addedFrined={addedFrined}
            ></Findfriends>
          ))}
        </div>
        <div>
          <AddedFrineds count={count}></AddedFrineds>
        </div>
      </div>
    </div>
  );
};

export default Body;
