import { Link } from "react-router-dom";


function Home() {
  return (
<>
 <div className="home-container">

      {/* LEFT SIDE */}
      <div className="left-side">

        <h2>WELCOME TO</h2>

        <h1>MR. DENTIST</h1>

        <h3>Best Dental Care & Modern Clinic</h3>

        <h4>
          We provide professional dental treatments with modern
          technology and experienced doctors for your healthy and
          beautiful smile.
        </h4>

       <Link to="App"><button>GET APPOINTMENT</button></Link>

      </div>

      {/* MIDDLE LINE */}
      <div className="middle-line"></div>

      {/* RIGHT SIDE */}
      <div className="right-side">

        <div className="image-frame">

          <img
            src="https://c8.alamy.com/comp/TC8906/vertical-view-of-a-dentist-room-with-black-seat-modern-dental-practice-dental-chair-and-other-accessories-used-by-dentists-TC8906.jpg"
            alt="Dentist"
          />

        </div>

      </div>

    </div>
</>

 
  );
}

export default Home;