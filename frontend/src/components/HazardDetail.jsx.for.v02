import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useParams} from 'react-router-dom';

const HazardDetail = () => {
  const [hazard, setHazard] = useState ();
  const params = useParams ();
  const id = params.id;
  console.log ('the id from props is', id);
  useEffect (
    () => {
      const getHazard = async () => {
        const response = await fetch (`/hazard/detail/${id}`);
        const data = await response.json ();
        setHazard (data);
        console.log (data);
      };
      getHazard ();
    },
    [id]
  );

  if (!hazard) {
    return <div>Loading</div>;
  }
  return (
    <React.Fragment>
      <div><h2>REPORTED HAZARDS</h2></div>
      <div>
        <Card variant="outlined" sx={{minWidth: 275, maxWidth: 400}}>
          <CardContent sx={{textAlign: 'left'}}>
            <Typography variant="h2" color="text.secondary" gutterBottom>
              {hazard.description}
            </Typography>

            <br />
            <div>
              Date:
              <ul>
                {hazard.date.map (date => {
                  return <li key={date}>{date}</li>;
                })}
              </ul>
            </div>
            <br />
            <div>
              User Name:
              <ul>
                {hazard.name.map (name => {
                  return <li key={name}>{name}</li>;
                })}
              </ul>
            </div>
            <br />
            <div>
              User Phone:
              <ul>
                {hazard.phone.map (phone => {
                  return (
                    <li key={phone._id}>
                      {hazard.name}({hazard.phone})
                    </li>
                  );
                })}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default HazardDetail;
