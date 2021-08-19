import './app.less';
import { AppProvider } from '@providers/app.provider';

function App() {
  return (
    <AppProvider>
      <h1>Krater</h1>
    </AppProvider>
  );
}

export default App;
