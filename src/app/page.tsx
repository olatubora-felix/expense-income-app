import { AddTransaction } from '@/components/AddTransaction';
import { Balance } from '@/components/Balance';
import Guest from '@/components/Guest';
import IncomeExpense from '@/components/IncomeExpense';
import Transaction from '@/components/Transaction';
import { checkUser } from '@/libs/checkUser';
import React from 'react'

const Home = async () => {
  const user = await checkUser();
  if (!user) return <Guest />
  return (
    <main className='max-w-[900px]  container mx-auto md:py-6 py-2 px-4'>
      <h2 className='text-base font-semibold my-3'>Welcome {user?.name}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <Transaction />
    </main>
  )
}

export default Home