import { QueryClient, QueryClientProvider } from 'react-query'
import User from './components/User'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <User/>
      </div>
    </QueryClientProvider>
  )
}

export default App
