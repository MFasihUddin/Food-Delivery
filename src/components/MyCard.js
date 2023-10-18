import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard() {
  return (
    <div className="container mt-5">
      <Card style={{ width: "18rem", maxHeight: "360px" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Important text</Card.Text>
          <div className="container w-100">
            <select className="m-2 h-100 rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 rounded">
              <option value="half">Half</option>
              <option value="Full">Full</option>
            </select>

            <div className="d-inline h-100">Total price</div>
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
