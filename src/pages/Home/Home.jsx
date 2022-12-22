import React from 'react';
import { useSelector } from 'react-redux';
import { ForwardingLink, Section } from './Home.styled';

const Home = () => {
  const token = useSelector(state => state.token);

  return (
  <Section>
    {!token && <p>
     <ForwardingLink to="/register">Sign up</ForwardingLink> or <ForwardingLink to="/login">log in</ForwardingLink> to continue!
    </p>}
  </Section>
  );
};

export default Home;
