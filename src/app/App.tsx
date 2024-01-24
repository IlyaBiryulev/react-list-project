import { withAppProviders } from './providers';
import { AppRouter } from './router';

import './App.css';

function App() {
  return <AppRouter />;
}

export default withAppProviders(App);
