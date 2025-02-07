// src/App.tsx
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Trending from './components/Trending';
import ErrorBoundary from "./components/ErrorBoundary";
// import Search from './components/Search';  <Search />

const queryClient = new QueryClient(); // ✅ Create QueryClient instance

function App() {
  return (
    <QueryClientProvider client={queryClient}> {/* ✅ Wrap with QueryClientProvider */}
      <ErrorBoundary>
        <Trending />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}


export default App;
