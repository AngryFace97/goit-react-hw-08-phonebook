import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin: 0 auto 10px auto;
  border: none;
  border-radius: 20px;
  background-color: #cfcfcf;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.7);
`;

export const Bold = styled.b`
  font-size: 44px;
  margin-top: 10px
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #808080;
  font-weight: 500;

  &:hover,
  &:focus {
    color: red;
  }
`;