import React, {useEffect, useState} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';

const HazardList = () => {
  const [hazards, setHazards] = useState ([]);

  useEffect (() => {
    const getHazards = async () => {
      const response = await fetch ('/api/hazard');
      const hazardsData = await response.json ();
      setHazards (hazardsData);
    };

    getHazards ();
  }, []);

  return (
    <div>
      <h2>Safety Hazards</h2>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Placeholder_category</TableCell>
              <TableCell align="right">Hazard Description</TableCell>
              <TableCell align="right">Hazard Date</TableCell>
              <TableCell align="right">Placeholder_address</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell align="right">User Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hazards.map (hazard => (
              <TableRow
                key={hazard.name}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {hazard.name}
                  <Link to={`/hazards/detail/${hazard._id}`}>
                    Go to detail
                  </Link>

                </TableCell>
                <TableCell align="right">{hazard.category}</TableCell>
                <TableCell>
                  <ul>
                    {hazard.description.map (description => {
                      return <li key={description}>{description}</li>;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  {' '}<ul>
                    {hazard.date.map (date => {
                      return <li key={date}>{date}</li>;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {hazard.address.map (address => {
                      return <li key={address}>{address}</li>;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {hazard.phone.map (phone => {
                      return <li key={phone}>{phone}</li>;
                    })}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HazardList;
