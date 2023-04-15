import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Nav = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="a" href="/">
            Social media
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: 2 }}></Toolbar>
    </>
  );
};

export default Nav;
