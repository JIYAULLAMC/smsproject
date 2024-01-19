import React from "react";
import { useSelector } from "react-redux";
import DataAction from "./DataAction";

function BodyArea() {
  const { activeSubTab } = useSelector((store) => store.subtabbar);
  console.log("active sub tab is --------", activeSubTab)
  return (
    <div>
      <DataAction />

      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">Select</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </td>
            <td scope="col">First</td>
            <td scope="col">Last</td>
            <td scope="col">Handle</td>
            <td scope="col">Handle</td>
          </tr>
          <tr>
            <td scope="col">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </td>
            <td scope="row">1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="col">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </td>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td scope="col">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </td>

            <td scope="row">3</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BodyArea;
