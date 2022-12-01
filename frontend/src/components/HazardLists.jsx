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
      console.log (hazardsData);
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

              <TableCell>HAZARD DESCRIPTION</TableCell>
              <TableCell>HAZARD LOCATION</TableCell>
              <TableCell>HAZARD DATE</TableCell>
              <TableCell>USER NAME</TableCell>
              <TableCell>USER PHONE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hazards.map (hazard => (
              <TableRow
                key={hazard._id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell>
                  {hazard.hazardDescription}
                </TableCell>
                <TableCell>
                  {hazard.hazardLocation}
                </TableCell>

                <TableCell component="th" scope="row">
                  {hazard.hazardDate}
                  {/*<Link to={`/hazards/detail/${hazard._id}`}>
                    Go to detail
            </Link>*/}

                </TableCell>

                <TableCell>
                  {hazard.userName}
                </TableCell>
                <TableCell>
                  {hazard.userPhone}
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
