import { createContext, ReactNode, useEffect, useState } from "react";
import { client } from "../lib/axios";
interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  findTransactions: (_query?: string) => Promise<void>;
  createNewTransaction: (_transaction: TransactionInput) => Promise<void>;
}

interface TransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function findTransactions(query?: string): Promise<void> {
    const response = await client.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(response.data);
  }
  async function createNewTransaction(transaction: TransactionInput) {
    const { description, price, category, type } = transaction;
    const respsonse = await client.post("/transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });
    setTransactions((state) => [respsonse.data, ...state]);
  }

  useEffect(() => {
    findTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, findTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
