import fit1 from "../components/images/fit1.jpeg";

export default function Home() {
  return (
    <div className="main">
      <div className="top"></div>
      <div className="image-container">
        <img src={fit1} alt="" />
      </div>
      <div className="textcont">
        <p>Attend classes that are run by local instructors, anywhere!</p>
      </div>
      <div className="btncontainer">
        <button className="mainbtn">Join Now</button>
      </div>

      <div className="bottom">
        <h3>
          Already have an account? <a href="">Log In</a>
        </h3>
      </div>
    </div>
  );
}
