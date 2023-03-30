import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://64240338d6152a4d4804489b.mockapi.io/fakerData")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (APIData) => {
    let { id, firstName, lastName, checkbox } = APIData;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://64240338d6152a4d4804489b.mockapi.io/fakerData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get("https://64240338d6152a4d4804489b.mockapi.io/fakerData")
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <div>
      <h3>Read Component</h3>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((userData) => {
            return (
              <Table.Row key={userData.id}>
                <Table.Cell>{userData.firstName}</Table.Cell>
                <Table.Cell>{userData.lastName}</Table.Cell>
                <Table.Cell>
                  {userData.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(userData)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(userData.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
