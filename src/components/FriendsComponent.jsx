import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const friends = [
  {
    id: 1,
    primary: "Avi M.",
    secondary: "Spice Girl - Aminé",
    profilePic: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Shane C.",
    secondary: "Jailbreak the Tesla (Feat. Aminé) - Injury Reserve",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "Valerie M.",
    secondary: "Boolin - Kyral X Banko",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "vandal",
    secondary: "Car #85 (Feat. Charlie Wilson) - Nas",
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    primary: "Carlos C.",
    secondary: "You Can Call Me Al - Paul Simon",
    person: "/static/images/avatar/4.jpg",
  },
  {
    id: 6,
    primary: "Vanessa G.",
    secondary: "6 Underground - Sneaker Pimps",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 7,
    primary: "Taylor E.",
    secondary: "EYE ON IT - PARTYNEXTDOOR",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 7,
    primary: "Digg H.",
    secondary: "Do You Realize?? - The Flaming Lips",
    person: "/static/images/avatar/1.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function ActiveFriends(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper} id="color">
        <Typography
          id="text-color"
          className={classes.text}
          variant="h5"
          gutterBottom
        >
          <h3>Friend Activity</h3>
        </Typography>
        <List id="list-color" className={classes.list}>
          {friends.map(({ id, primary, secondary, profilePic }) => (
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={props.profilePic} />
                </ListItemAvatar>
                <ListItemText
                  primary={primary}
                  secondary={secondary}
                  profilePic={profilePic}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
