import { Bold, HomeLink, Main } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Main>
      <Bold>404</Bold>
      <p>Go to <HomeLink to="/">main page</HomeLink>.
      </p>
    </Main>
  );
};

export default NotFound;