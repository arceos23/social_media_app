import { useContext } from "react";
import { UserContext } from "@/lib/userContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { auth } from "../lib/firebase";

const Nav = () => {
  const { username } = useContext(UserContext);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="a" href="/" sx={{ flexGrow: 1 }}>
            Social media
          </Typography>
          {username && (
            <>
              <Typography variant="h6" sx={{ mr: 2 }}>
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
