import { Container, Grid } from "@mui/material";
import FromContainer from "./FromContainer";
import SideBar from "./SideBar";

function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <SideBar />
        </Grid>
        <Grid item lg={8}>
          <FromContainer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
