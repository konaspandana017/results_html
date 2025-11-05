import { Paper, Card, Stack, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";

const UserData = ({ row }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell> {/* S.No starts from 1 */}
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


const UserForm = () => {
  const [name, setName] = useState("");
  const [dataRows, setDataRows] = useState([]);

  function textValue(e) {
    setName(e.target.value);
  }

  const rowCreate = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setDataRows((prevRows) => [...prevRows, { name }]);
      setName("");
    }
  };

  return (
    <div>
      <Paper>
        <h1>User Profile Registration</h1>
        <Card elevation={4}>
          <form onSubmit={rowCreate}>
            <Stack spacing={2} padding={2}>
              <TextField
                label="Enter First Name"
                variant="outlined"
                placeholder="Enter First Name"
                value={name}
                onChange={textValue}
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Stack>
          </form>
          <UserData row={dataRows} />
        </Card>
      </Paper>
    </div>
  );
};

export default UserForm;
