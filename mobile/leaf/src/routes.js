import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/Login';

const routes = createAppContainer(
  createSwitchNavigator({
    Login,
  }),
);

export default routes;
