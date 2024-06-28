'use client'
import addTransaction from '@/app/action/addTransaction'
import React from 'react'
import { toast } from 'react-toastify'

export const AddTransaction = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { error } = await addTransaction(formData);

    if (error) {
      return toast.error(error);
    } else {
      toast.success("Transaction added successfully");
      formRef.current?.reset(); // Reset form
    }
  }
  return (
    <>
      <h3 className='text-xl font-bold text-black my-2'>Add Transaction</h3>
      <form action={clientAction} ref={formRef} className='grid gap-4'>
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className='text-base font-normal text-black'>Text</label>
          <input type="text" className=' h-[42px]  w-full bg-slate-800 text-white rounded-lg p-3 border-none outline-none ' id="text" name="text" placeholder="Enter text..." />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className='text-base font-normal text-black'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input type="number" className=' h-[42px]  w-full bg-slate-800 text-white rounded-lg p-3 border-none outline-none ' id="amount" name="amount" placeholder="Enter amount..." step='0.01' />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className='text-base font-normal text-black'>
            Type
          </label>
          <select className=' h-[42px]  w-full bg-slate-800 text-white rounded-lg p-3 border-none outline-none ' id="type" name="type"  >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button className=" bg-purple-700 text-white py-2 px-4 rounded-lg h-[53px]">Add Transaction</button>
      </form>
    </>
  )
}
