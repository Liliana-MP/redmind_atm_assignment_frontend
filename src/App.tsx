import AtmPage from "./pages/AtmPage/AtmPage";
import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

const GlobalStyle = createGlobalStyle`
body {
  background-image: url(${background});
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AtmPage />
    </div>
  );
}

export default App;
