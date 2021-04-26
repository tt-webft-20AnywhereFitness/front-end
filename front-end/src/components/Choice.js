import client from "../components/images/client.jpeg";
import trainer from "../components/images/trainer.jpeg";
import { Link } from "react-router-dom";
import React from "react";

export default function Choice() {
  return (
    <div className="choicemain">
      <h2>Choose if you want to join as a Client or an Instructor</h2>

      <span>Client</span>
      <Link to="/clientregister" className="choiceimages">
        <img src={client} alt="" />
      </Link>
      <span>Instructor</span>
      <Link to="/register" className="choiceimages">
        <img src={trainer} alt="" />
      </Link>
    </div>
  );
}
