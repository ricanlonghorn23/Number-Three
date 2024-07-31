import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { Message, Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Sidebar, } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const user = data?.user || [];
  
  

  return (
    <div>
    {Auth.loggedIn() ? (
    <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid.Column>
       <Message style={{ textAlign: 'center' }} error>This is the home page when the user logs in</Message>
      </Grid.Column>
  </Segment>
) : (     <Segment style={{ padding: '8em 0em' }} vertical>
   <Message info style={{ textAlign: 'center' }}>
          Don't be gone to long your pet needs you!!
        </Message>
  <Grid container stackable verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column textAlign='center'>
        <Button size='Large' href='/' >Go to Login Page</Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
)}
</div>
  );
};

export default Home;
