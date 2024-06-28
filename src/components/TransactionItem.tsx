'use client';

import { toast } from 'react-toastify';
// import deleteTransaction from '@/app/actions/deleteTransaction';
import { addCommas } from '@/libs/utils';
import { Transaction } from '@/types/transaction';
import dayjs from 'dayjs';
import { MdDeleteForever } from "react-icons/md";
import deleteTransaction from '@/app/action/deleteTransaction';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this transaction?'
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <li className={` flex justify-between items-center shadow-md px-4 py-2 rounded-md ${transaction.type === 'income' ? 'border-green-500 border-r-[8px] ' : 'border-red-500 border-r-[8px] '}`}>

      <div>
        <p className='text-slate-800 font-semibold text-lg'>{transaction.text}</p>
        <p className={`${transaction.type === 'income' ? ' text-green-500' : ' text-red-500'}`}>
          {sign}${addCommas(Math.abs(transaction.amount))}
        </p>
        <span className='text-slate-800 font-normal text-sm'>{dayjs(transaction?.createdAt).format('ddd, MMM D, YYYY h:mm A')}</span>
      </div>


      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className='text-red-500 hover:text-red-700 focus:outline-none'
      >
        <MdDeleteForever fontSize={30} />
      </button>
    </li>
  );
};

export default TransactionItem;