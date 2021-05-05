import React from "react";
import "./Findfriends.css";

const Findfriends = (props) => {
  const {
    first_name,
    last_name,
    email,
    gender,
    income,
    image,
  } = props.information;

  const addedFrined = props.addedFrined;
  return (
    <div>
      {/* <h1>User data Loded: {props.information.length}</h1> */}
      <div className="mainDivofDetails">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="detailsDiv">
          <h3>
            Name: {first_name} {last_name}
          </h3>

          <p>Email: {email}</p>

          <p>Gender: {gender}</p>
          <p>Income: {income}</p>

          <button
            className="addBtn"
            onClick={() => addedFrined(props.information)}
          >
            Add frined
          </button>
        </div>
      </div>
    </div>
  );
};

export default Findfriends;
