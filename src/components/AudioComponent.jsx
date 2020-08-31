import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  dropDown: {
    width: 200,
  },
});

export default function AudioCard() {
  const classes = useStyles();

  const [quality, setQuality] = React.useState("");

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  let warning;

  if (quality === "Low") {
    warning = `Music quality is degraded. Increase quality if your connection allows it.`;
  } else {
    warning = "";
  }

  return (
    <Card className="audioCard">
      <CardContent>
        <Typography gutterBottom>
          <h1>Audio Quality</h1>
          <p>{warning}</p>
        </Typography>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel>Quality</InputLabel>
          <Select
            className={classes.dropDown}
            value={quality}
            onChange={handleChange}
          >
            <MenuItem value={"Low"}>Low Quality</MenuItem>
            <MenuItem value={"Normal"}>Normal Quality</MenuItem>
            <MenuItem value={"High"}>High Quality</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}
