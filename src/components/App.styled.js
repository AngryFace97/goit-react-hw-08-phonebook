import styled from 'styled-components';

export const Wrapper = styled.div`
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

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;