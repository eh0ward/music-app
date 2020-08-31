import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

export default function OnlineCard() {
  const [state, setState] = React.useState({
    online: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let content;
  let mode;

  if (state.online) {
    content = "You are online. Songs are available for streaming.";
    mode = "Online";
  } else {
    content =
      "You are offline. You won't be able to share or stream music to other devices.";
    mode = "Offline";
  }

  return (
    <Card className="onlineCard">
      <CardContent>
        <Typography color="textPrimary">
          <h1>{mode}</h1>
          <p>{content}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          checked={state.online}
          onChange={handleChange}
          name="online"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </CardActions>
    </Card>
  );
}
