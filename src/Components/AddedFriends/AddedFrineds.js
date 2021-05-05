import React from "react";

const AddedFrineds = (props) => {
  const count = props.count;

  const incomeWithString = count.reduce(
    (sum, info) => sum + parseInt(info.income),
    0
  );

  return (
    <div>
      <h2>Add some friend here</h2>
      <h3>Frind Added Count: {count.length}</h3>
      <h3>Total income of Them: {incomeWithString}</h3>
    </div>
  );
};

export default AddedFrineds;
