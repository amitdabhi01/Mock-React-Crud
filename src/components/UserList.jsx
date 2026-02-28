import React from "react";

import { Container, Button, Table } from "react-bootstrap";

const UserList = () => {
  const initialUser = {
    image:
      "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_rp_progressive&w=740&q=80",
    name: "amit",
    email: "amit@gmail.com",
    phone: "9876543210",
  };

  return (
    <>
      <Container className="">
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td colSpan={2}>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td colSpan={2}>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td colSpan={2}>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default UserList;
