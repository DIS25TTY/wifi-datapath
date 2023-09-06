import axios from "axios";
import { useState } from "react";

function ApDelete() {
  const [anam, setVid] = useState("");
  const [val, setVal] = useState(0);
  const handleMod = () => {
    // if(first.length===0)
    // alert("first name must be filled");
    let fData = new FormData();
    const url = "http://localhost/cdot/logged-page/apdelete.php";
    if (!anam) {
      setVal(0);
      alert("fill the field");
    } else {
      setVal(1);
      fData.append("anam", anam);
    }
    //we need bcz to check the existance of the anam entered
    if (val) {
      axios
        .post(url, fData)
        .then((Response) => {
          alert(Response.data);
          // setVid("");
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <>
      <div className="card-body">
        <h3 className="card-title">AP Delete</h3>
        <br />

        <p className="card-text"></p>
        <form className="row g-3" action="#">
          <div className="col-md-6">
            <label htmlFor="anam" className="form-label">
              AP Name
            </label>
            <input
              required
              type="anam"
              value={anam}
              className="form-control"
              id="anam"
              // name="anam"
              onChange={(e) => setVid(e.target.value)}
            />
          </div>
          <div className="col-12" style={{ marginLeft: "920px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-toggle={val ? "modal" : ""}
              data-bs-target={val ? "#staticBackdrop" : ""}
              onClick={() => {
                if (!anam) setVal(0);
                else setVal(1);
              }}
            >
              Delete
            </button>
          </div>
        </form>

        {/* <a href="#" className="btn btn-primary">
        go somewhere
      </a> */}
      </div>
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={val === 0 ? { display: "none" } : {}}
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
            <div className="modal-body">Delete {anam} Account</div>
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
    </>
  );
}
export default ApDelete;
