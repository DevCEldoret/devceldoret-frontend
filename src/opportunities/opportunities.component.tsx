import React from "react";
import styles from "./opportunities.component.css";
import { Link } from "react-router-dom";
import Section from "../hocs/section.component";

export default function Opportunities() {
  const [opportunities, setOpportunities] = React.useState([]);
  React.useEffect(() => {}, []);
  return (
    <Section title="Opportunities">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Company</th>
              <th scope="col">Location</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}
