import { useContext } from "react";
import { UserContext } from "@/lib/userContext";
import { auth } from "../lib/firebase";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Nav = () => {
  const { username } = useContext(UserContext);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="a" href="/">
            Social media
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
          {username && (
            <>
              <Typography variant="h6" sx={{ mr: 2, alignContent: "right" }}>
                {username}
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "none", background: "gray" }}
                onClick={logOut}
              >
                Log out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: 2 }}></Toolbar>
    </>
  );
};

const logOut = () => {
  auth.signOut();
};

export default Nav;
