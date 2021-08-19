import './app.less';
import { AppProvider } from '@providers/app.provider';
import { AppRouting } from '@router/app-routing';

function App() {
  return (
    <AppProvider>
      <AppRouting />
    </AppProvider>
  );
}

export default App;
