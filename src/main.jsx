import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Layout from './components/Layout'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout /> 
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
)
