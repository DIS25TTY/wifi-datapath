import { useState } from "react";
import axios from "axios";

// import { Item } from "react-bootstrap/lib/Breadcrumb";

function UserModify() {
  const [res, setRes] = useState({
    first: "",
    last: "",
    pincode: "",
    area_work: "",
    phno: "",
    city: "",
    state: "",
  });

  // Headers: [{ key: "first", label: "first" }];

  const [validate, setvalidate] = useState(0);
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setEmail] = useState("");

  const [phno, setPhno] = useState("");

  const [address, setAdd] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setzip] = useState("");

  let fData = new FormData();
  const handleMod = () => {
    // if(first.length===0)
    console.log(validate);
    console.log(email);
    const url = "http://localhost/cdot/logged-page/usermodify.php";

    fData.append("email", email);
    // fData.append("validate", String(validate));
    //we need bcz to check the existance of the email entered

    if (validate == 0) {
      fData.append("validate", String(validate));

      axios
        .post(url, fData)
        .then((Response) => {
          // alert(Response.data);
          const ob = Response.data;
          const obb = JSON.stringify(ob);
          const obbj = JSON.parse(obb);
          setRes(obbj);
          console.log(res["first"]);
          setvalidate(1);
          if (typeof res["first"] != "undefined" && res["first"].length !== 0) {
            setfirst(res["first"]);
            setlast(res["last"]);
            setAdd(res["area_work"]);
            setzip(res["pincode"]);
            setPhno(res["phno"]);
            setCity(res["city"]);
            setState(res["state"]);
            console.log(res["first"].length);
            setvalidate(2);
          } else {
            setvalidate(0);
            if (typeof res["first"] == "undefined") alert(Response.data);
          }
        })
        .catch((error) => alert(error));
      return;
      //   handleMod();
    }
    // console.log(validate);
    if (validate === 3) {
      fData.append("first", first);
      fData.append("last", last);
      fData.append("address", address);
      // fData.append("email", email);

      // fData.append("password", password);
      fData.append("city", city);

      fData.append("state", state);
      fData.append("phno", phno);
      fData.append("zip", zip);
      fData.append("validate", String(validate));

      setvalidate(0);
      setRes({
        first: "",
        last: "",
        pincode: "",
        area_work: "",
        phno: "",
        city: "",
        state: "",
      });
      // }
      axios
        .post(url, fData)
        .then((Response) => {
          alert(Response.data);
        })
        .catch((error) => alert(error));
    }
  };

  // var email = document.getElementById("email");
  // console.log(email);

  return (
    <>
      <div className="card-body">
        <h3 className="card-title">USER MODIFY</h3>
        <br />

        <p className="card-text"></p>
        <form
          className="row g-3"
          onSubmit={() => {
            console.log("jahd");
            if (email.length !== 0) {
              console.log(email.length);
              //   setvalidate(1);
              //   console.log(validate);
              handleMod();
            }
          }}
        >
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => {
                // setvalidate(0);
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-12" style={{ marginLeft: "920px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Modify
            </button>
          </div>
        </form>

        {/* //popup */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Delete Confirmation
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Modify {email} Account</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleMod}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <a href="#" className="btn btn-primary">
        go somewhere
      </a> */}
      </div>
      <div
        className="card-body"
        style={validate !== 2 ? { display: "none" } : {}}
      >
        <h3 className="card-title">MODIFY THE DETAILS</h3>
        <br />

        <p className="card-text"></p>
        <form
          className="row g-3"
          onSubmit={() => {
            console.log(validate + "iiiiiiiiiii");
            handleMod();
          }}
        >
          <div className="col-md-6">
            <label htmlFor="first" className="form-label">
              First Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="first"
              value={first}
              onChange={(e) => setfirst(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Last Name" className="form-label">
              Last Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="last"
              value={last}
              onChange={(e) => setlast(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="first" className="form-label">
              Phno
            </label>
            <input
              required
              type="number"
              className="form-control"
              id="phno"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Area/Work Station/Dept
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAdd(e.target.value)}
              placeholder="Service to be rendered"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              required
              type="text"
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
              id="city"
              value={city}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              type="text"
              id="state"
              className="form-select"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => setzip(e.target.value)}
              id="zip"
              value={zip}
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                required
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Details are VALID
              </label>
            </div>
          </div>
          <div className="col-12" style={{ marginLeft: "880px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => setvalidate(3)}
            >
              Update
            </button>
            {/* <button
              type="reset"
              className="btn btn-primary"
              style={{ marginLeft: "40px" }}
            >
              RESET
            </button> */}
          </div>
        </form>
        {/* <a href="#" className="btn btn-primary">
        go somewhere
      </a> */}
      </div>
      ;
    </>
  );
}

export default UserModify;
