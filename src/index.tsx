import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 10000 ,
      cacheTime: 3000,
      retry: 1
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

