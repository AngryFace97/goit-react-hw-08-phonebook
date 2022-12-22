import { Bold, HomeLink, Main } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Main>
      <Bold>Phonebook</Bold>
      <p>Go to <HomeLink to="/">main page</HomeLink>.
      </p>
    </Main>
  );
};

export default NotFound;