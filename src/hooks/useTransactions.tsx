import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number,
  title: string
  amount: number,
  type: string,
  category: string,
  createdAt: string
}

interface TransactionInput {
  title: string,
  amount: number,
  type: string,
  category: string
}

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
       .then(( { data } ) => {
         setTransactions(data.transactions)
      })
      .catch(err => console.log(err))
  }, [])

  async function createTransaction(transactonInput : TransactionInput) {
    const { data } = await api.post('/transactions', {
      ...transactonInput,
      createdAt: new Date()
    })
    const { transaction } = data

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )

}


export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
