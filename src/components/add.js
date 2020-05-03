import React, { useState } from "react";

function Add() {
  const fields = {
    name: null,
    email: null,
  };

  const [error, setError] = useState(fields);
  const [data, setData] = useState([]);
  const valemailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        error.email = valemailRegex.test(value) ? null : "invalid email";
        break;

      case "name":
        error.name = value.length < 4 ? "Username must be atleast 4 characters" : null;
        break;
      default:
        break;
    }
    setError({ ...error });
  };
  const displayError = (field) => {
    return field ? <small className="text-danger ">{field}</small> : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    setData([...data, value]);
    e.target.email.value = null;
    e.target.name.value = null;
  };
  return (
    <>
      <div className="row">
        <div className="col-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="form-group">
              <label for="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  class="form-control"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
            {displayError(error.name)}
            <div class="form-group">
              <label for="name">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  class="form-control"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
            {displayError(error.email)}
            <div class="form-group">
              <button type="submit" class="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="col-9">
          {/* {console.log(data)} */}
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0
                ? data.map((i) => {
                    return (
                      <>
                        <tr>
                          <td>{i.name}</td>
                          <td>{i.email}</td>
                        </tr>
                      </>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Add;
