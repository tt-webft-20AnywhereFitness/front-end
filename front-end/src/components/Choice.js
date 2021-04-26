import client from "../components/images/client.jpeg";
import trainer from "../components/images/trainer.jpeg";

export default function Choice() {
  return (
    <div className="choicemain">
      <h2>Choose if you want to join as a Client or an Instructor</h2>
      <div className="choiceimages">
        <h2>Client</h2><br/>
        <img src={client} alt="" />
        <h2>Instructor</h2>
        <img src={trainer} alt="" />
      </div>
    </div>
  );
}
