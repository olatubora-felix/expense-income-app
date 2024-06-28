

import getTransactions from "@/app/action/getTransactions";
import TransactionList from "./TransactionLists";


const Transaction = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className='error'>{error}</p>;
  }

  return <TransactionList transactions={transactions || []} />;
};

export default Transaction;