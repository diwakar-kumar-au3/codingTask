import React, { useEffect, useState } from "react";
import axios from "axios";
function View() {
  const [tdata, setTdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTdata(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>

            <th scope="col">Title</th>
            <th scope="col">Completed/Incomplete</th>
          </tr>
        </thead>
        <tbody>
          {tdata.length
            ? tdata.map((i) => {
                return (
                  <>
                    <tr>
                      <td>{i.id}</td>
                      <td>{i.title}</td>
                      <td>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="exampleRadios"
                            id="exampleRadios1"
                            checked={i.completed}
                          />
                          <label class="form-check-label" for="exampleRadios1">
                            Completed
                          </label>
                        </div>
                        {/* {i.completed ? <td>Completed</td> : <td>Incomplete</td>} */}
                      </td>
                    </tr>
                  </>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}
export default View;
