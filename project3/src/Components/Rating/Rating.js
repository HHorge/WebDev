import React from 'react';
import './Rating.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from "react-redux";
const { ObjectId } = require('mongodb')


export default function SimpleRating() {
  const stateDetails = useSelector(state => state.details);
  const [value, setValue] = React.useState(2);
  
  //Logic for writing user rating to database
  function addRating(value){
    let id = ObjectId(stateDetails["_id"]) 
    fetch("http://it2810-08.idi.ntnu.no:5000/albums", {
      body: {
        id: id,
      rating: value
      },
      method: 'PUT'
    })
  }

//Displaying interactive stars for user rating
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate this album!</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            addRating(newValue)
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}