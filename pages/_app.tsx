import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import config from '@/src/amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
