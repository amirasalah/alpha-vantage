import { DataTable } from './data-table'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className="App">
        <DataTable />
      </main>
    </QueryClientProvider>

  )
}

export default App
