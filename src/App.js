import './App.css';
import Entry from './Entry/Entry';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontSize: 22,
  },
});

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Entry />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
