import { memo } from 'react';
import Router from './Router';
import { SimpleUIProvider } from './utils';

const App = (): JSX.Element => (
  <SimpleUIProvider>
    <Router />
  </SimpleUIProvider>
);

export default memo(App);
