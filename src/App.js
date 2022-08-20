import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Facts } from "./components/Facts";
import { Avatar } from "./components/Avatar";
import styled from "styled-components";

const StyledApp = styled.div`
  padding: 80px;

  display: grid;
  gap: 48px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <StyledApp>
        <Avatar />
        <Facts />
      </StyledApp>
    </Provider>
  );
};

export { App };
