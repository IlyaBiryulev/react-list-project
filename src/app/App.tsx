import { withAppProviders } from './providers';
import { AppRouter } from './router';

function App() {
  return <AppRouter />;
}

export default withAppProviders(App);
