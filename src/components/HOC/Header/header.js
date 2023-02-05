import React from 'react';
import '../style.css'

const Header = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className={props.selected === 'Home' ? 'selected' : ''}
              onClick={props.handleClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={props.selected === 'About' ? 'selected' : ''}
              onClick={props.handleClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={props.selected === 'Contact' ? 'selected' : ''}
              onClick={props.handleClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
