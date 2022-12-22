import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 20px;
  text-align: justify;
`;

export const ForwardingLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: #808080;

  &:hover,
  &:focus {
    color: red;
  }
`;        