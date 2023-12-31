import { useState } from "react";

function UserView() {
  const [comps, setComp] = useState([
    {
      firstname: "",
      lastname: "",
      area_work: "",
      city: "",
      state: "",
      phno: "",
      pincode: "",
      email: "",
    },
  ]);
  function compDisplay() {
    fetch("http://localhost/cdot/logged-page/userview.php")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        setComp(result);
      })
      .catch((err) => {
        console.log("Error reading data " + err);
      });
  }
  compDisplay();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">USER VIEW</h3>
        </div>
      </div>
      <br />
      {comps.map(function (item, index) {
        return (
          <>
            <div className="card">
              <div className="card-body" key={index}>
                {/* <h5 className="card-title">Card title</h5> */}

                <h6 className="card-subtitle mb-2 text">
                  Full Name &nbsp;&nbsp; :&nbsp;&nbsp;
                  {item.firstname + " " + item.lastname}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Email ID &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.email}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Phno &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.phno}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Address &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.area_work}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  City &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.city}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  State &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.state}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Pincode &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.pincode}
                </h6>
              </div>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
}
export default UserView;
