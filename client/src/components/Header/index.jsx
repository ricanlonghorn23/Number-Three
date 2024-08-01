import React , { useState } from 'react'
import { Header, Icon, HeaderContent, Menu, Container, Dropdown } from 'semantic-ui-react'
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const mainHeader = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const goToAdoptPet = (event) => {
    event.preventDefault();
    navigate('/AdoptPet'); // Ensure the correct route for the AdoptPet component
  };
  return (
    <div>
      {Auth.loggedIn() ? (
        <Menu color='teal' fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Icon name='paw' />
              Pet Adoption Application
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item onClick={goToAdoptPet}>Adopt a Pet</Dropdown.Item>
                <Dropdown.Item>Pet Care</Dropdown.Item>
                <Dropdown.Item>Pet Status</Dropdown.Item>
                <Dropdown.Item>Achievements</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      ) : (
        <Menu color='teal' fixed='top' inverted>
       <Container>
       <Menu.Item as='a' header>
       <Icon name='paw'/>
        Pet Adoption Application
       </Menu.Item>           
       </Container>
       </Menu>
       
       
      )}
    </div>
  );
};
export default mainHeader