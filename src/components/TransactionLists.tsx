'use client'

import { Transaction } from "@/types/transaction";
import TransactionItem from "./TransactionItem";
import { useState } from "react";
const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const [count, setCount] = useState(5)

  const handleShowMore = () => {
    if (count === transactions?.length) return
    setCount(prev => {
      if (prev >= transactions?.length) {
        return transactions?.length as number
      }
      return prev + 5

    })
  }

  const handleShowLess = () => {
    setCount(prev => {
      if (prev <= 5) {
        return 5
      }
      return prev - 5

    })
  }
  console.log(transactions?.length, count)
  return (
    <section className="py-4">
      <h3 className=" font-bold my-3 text-black text-2xl">History</h3>
      <ul className='grid gap-4'>
        {transactions &&
          transactions?.slice(0, count)?.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
      </ul>
      {
        transactions?.length > count && <div className="py-6 flex justify-end items-center">
          {
            transactions?.length === count ? (
              <button onClick={handleShowLess} className=" cursor-pointer font-semibold text-xl text-red-800"> Show Less</button>
            )
              : <button onClick={handleShowMore} className=" cursor-pointer font-semibold text-xl text-red-800"> Show More</button>
          }

        </div>
      }

    </section>
  );
};

export default TransactionList;