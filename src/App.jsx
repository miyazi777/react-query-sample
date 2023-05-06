import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import User from './components/User'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(true)
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div><button onClick={() => setShow(!show)}>Toggle</button></div>
        {show && <User/>}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
