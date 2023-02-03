import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: string
}

interface FetchTransactionsProps {
  query?: string
  page?: number
}

interface TransactionsContextType {
  transactions: Transaction[]
  totalTransactions: number
  currentPage: number
  fetchTransactions: (URLparams?: FetchTransactionsProps) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  goToPreviousPage: () => void
  goToNextPage: () => void
  changePage: (e: any) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  function goToPreviousPage() {
    setCurrentPage((prev) => prev - 1)
  }

  function goToNextPage() {
    setCurrentPage((prev) => prev + 1)
  }

  function changePage(e: any) {
    const pageNumber = Number(e.target.innerText)
    setCurrentPage(pageNumber)
  }

  const fetchTransactions = useCallback(
    async (URLparams?: FetchTransactionsProps) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          _page: URLparams?.page,
          q: URLparams?.query,
        },
      })

      console.log(response)

      setTotalTransactions(
        Number(response.headers['x-total-count']) || response.data.length,
      )
      setTransactions(response.data)
    },
    [],
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions({ page: currentPage })
  }, [fetchTransactions, currentPage])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        totalTransactions,
        currentPage,
        fetchTransactions,
        createTransaction,
        goToPreviousPage,
        goToNextPage,
        changePage,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
