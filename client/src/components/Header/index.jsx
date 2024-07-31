import React , { useState } from 'react'
import { Header, Icon, HeaderContent, Menu, Container, Dropdown } from 'semantic-ui-react'
import Auth from '../../utils/auth';

const mainHeader = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      {Auth.loggedIn() ? (
        <Menu color='teal' fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Icon name='heartbeat' />
              Pet Adoption Application
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>Adopt a Pet</Dropdown.Item>
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
       <Icon name='heartbeat' />
        Pet Adoption Application
       </Menu.Item>            
      {/* <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>*/}
       </Container>
       </Menu>
       
       
      )}
    </div>
  );
};
export default mainHeader