'use client';
import { addCommas } from '@/libs/utils';
import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
export const ShowBalance = ({ balance }: ShowBalanceProps) => {
  const [showBalance, setShowBalance] = React.useState(false);



  return (
    <section className=' bg-gradient-to-tr from-slate-800 to-slate-800 p-4 text-white rounded-lg flex justify-between items-center'>
      <div>
        <h4 className='font-medium text-white'>Your Balance</h4>
        <h1 className='font-semibold text-base my-1 text-orange-500'>
          {showBalance ? `${addCommas(balance)}` : '******'}
        </h1>
      </div>
      <div>
        <button onClick={() => setShowBalance(!showBalance)}>
          {showBalance ? <IoEyeOff /> : <IoEye />}
        </button>
      </div>
    </section>
  )
}
interface ShowBalanceProps {
  balance: number;
}