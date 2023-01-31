import {ThemeProvider, createGlobalStyle } from 'styled-components';
import logo from './logo.svg'
import './App.css';
import './styles.css'
import StyledButton, {FancyButton} from './component/Button/Button';
import { DarkButton } from './component/Button/Button.styles';

const theme = {
  dark:{
    primary: '#000',
    text: '#fff'
  },
  light:{
    primary:'#fff',
    text: '#000'
  }
}
const GlobalStyle = createGlobalStyle`
  button{
    font-family: 'Roboto';
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo"/> */}
      {/* <button>Button</button> */}
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <FancyButton>Fancy Button</FancyButton>
      <div>
        <br/>
      </div>
      <DarkButton>Dark Theme</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
