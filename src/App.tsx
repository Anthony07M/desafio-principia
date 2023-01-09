import { GlobalStyle } from './styles/global';
import { RoutesProvider } from './routes';

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <RoutesProvider />
    </>
  );
}
