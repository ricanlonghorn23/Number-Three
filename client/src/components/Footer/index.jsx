import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
    <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
    <Container textAlign='center'>
      <Grid columns={4} divided stackable inverted>
       
      </Grid>
      <Divider inverted section />
      <Icon name='paw' centered size='mini' />
      <List horizontal inverted divided link size='small'>
        <List.Item as='a' href='#'>
          Site Map
        </List.Item>
        <List.Item as='a' href='#'>
          Contact Us
        </List.Item>
        <List.Item as='a' href='#'>
          Terms and Conditions
        </List.Item>
        <List.Item as='a' href='#'>
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>

</div>
);
};
export default Footer;
