import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

class OnlineComponent extends Component {
  state = {
    isOnline: false,
  };

  isOnline = () => {
    this.setState({ isOnline: !this.state.isOnline });
  };

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isOnline && prevState.isOnline) {
      this.props.handleNotifications();
    }
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Switch onChange={this.isOnline} />
          <Typography variant="h5" component="h2">
            Online
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    );
  }
}

export default OnlineComponent;
