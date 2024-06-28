
import getIncomeExpense from '@/app/action/getIncomeExpense';
import { addCommas } from '@/libs/utils';


const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <section className='flex justify-center items-center py-4'>
      <div className='flex items-center justify-between p-3 shadow-xl w-full'>
        <div className='w'>
          <h4 className='text-base font-medium my-1'>Income</h4>
          <p className='text-green-700'>{addCommas(Number(income?.toFixed(2)))}</p>
        </div>
        <div>
          <h4 className='text-base font-medium my-1'>Expense</h4>
          <p className='text-red-700'>{addCommas(Number(expense?.toFixed(2)))}</p>
        </div>
      </div>
    </section>
  );
};

export default IncomeExpense;