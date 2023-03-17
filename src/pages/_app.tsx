import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import { QueryClient, QueryClientProvider, } from 'react-query'
import { store } from '../Redux/Store'
import { Provider, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function App({ Component, pageProps }: AppProps) {

  const client = new QueryClient({})

  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (typeof window !== 'undefined') {
    return (
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Layout>
          <ToastContainer/>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </Provider>
     
    );
  } else {

    return (
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Layout>
          <ToastContainer/>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </Provider>
    )
  }




}
