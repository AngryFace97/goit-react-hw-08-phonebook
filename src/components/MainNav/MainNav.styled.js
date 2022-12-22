import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  & ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  & li { 
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  
  & p {
    padding: 5px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;

    & span {
      font-weight: 700;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 7px;
  border: none;
  border-radius: 7px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  background-color: #A9A9A9;
  border: 1px solid #696969;

  &:hover,
  &:focus {
    color: black;
    background-color: white;
    transition: color 1200ms, border-color 1200ms, background-color 1200ms, box-shadow 1200ms;
  }
  }
`;