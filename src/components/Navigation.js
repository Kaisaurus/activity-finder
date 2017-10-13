import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return(
      <Menu pointing secondary>
        <Menu.Item
          name='home'
          as={ Link }
          to='/'
          active={ activeItem === 'home' }
          onClick={ this.handleItemClick }
          content='Activity Suggestion'
        />
        <Menu.Item
          name='activities'
          as={ Link }
          to='/activities'
          active={ activeItem === 'activities' }
          onClick={ this.handleItemClick }
          content='All Activities'
        />
      </Menu>
    );
  }
}