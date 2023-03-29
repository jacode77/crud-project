import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios

      .get("https://64240338d6152a4d4804489b.mockapi.io/fakerData")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  console.log(APIData.firstName);
  return (
    <div>
      <h3>Read Component</h3>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((usersData) => {
            return (
              <Table.Row>
                <Table.Cell>{usersData.firstName}</Table.Cell>
                <Table.Cell>{usersData.lastName}</Table.Cell>
                <Table.Cell>
                  {usersData.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
