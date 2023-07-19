import type { AppProps } from 'next/app';

import '@/assets/styles/fonts.css';
import '@/assets/styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
