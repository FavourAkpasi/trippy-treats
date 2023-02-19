import { BrowserRouter } from 'react-router-dom';
import { AppNavigation } from './navigation/AppNavigation';

export const App = () => {
  return (
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  );
};
