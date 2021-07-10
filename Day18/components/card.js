import React from "react";
import Row from "./row";

var Box = [0, 1, 2, 3, 4, 5, 6, 7];
const black = {
  backgroundColor: "black",
};
const white = {
  backgroundColor: "white",
};

function Card() {
  return (
    <>
      {Box.map((i) =>
        i % 2 === 0 ? <Row style={black} /> : <Row style={white} />
      )}
      {/* <Row stl={black}/> */}
    </>
  );
}
export default Card;
