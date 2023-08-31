import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Menu, 
  MenuItem,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";


// @mui/material/Button

const Import = ({ makes, fetchMakes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("import rendering");
  // fill out this component
  return (
    <div>
      <Button variant="contained" color="primary" onClick={fetchMakes}>
        Import
      </Button>
      <button onClick={fetchMakes}>Import</button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {makes.map((make, index) => (
            <TableRow key={index}>
              <TableCell>{make.Makeid}</TableCell>
              <TableCell>{make.Makename}</TableCell>
              <TableCell>
                <IconButton 
                    aria-label='more' 
                    aria-controls='long-menu'   
                    aria-haspopup='true' 
                    onClick={handleClick}> 
                    <MoreVert/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
>
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>

      </Menu>
    </div>
  );
};

export default Import;
