import { Grid, GridItem } from '@chakra-ui/react';
import FromContainer from '../features/form/FromContainer';
import SideBar from './SideBar';

function Home() {
  return (
    <Grid templateRows="repete(2, 1ref)" templateColumns="repeat(5, 1fr)">
      <GridItem>
        <SideBar />
      </GridItem>
      <GridItem colSpan={4}>
        <FromContainer />
      </GridItem>
    </Grid>
  );
}

export default Home;
