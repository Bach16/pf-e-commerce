import './styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../../themes'
import { UiProvider } from '../context'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';

export default function App({ Component, pageProps }: AppProps) {
  return(
      <Provider store={store}>
        <UiProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
        </UiProvider>
      </Provider>


  )
}
