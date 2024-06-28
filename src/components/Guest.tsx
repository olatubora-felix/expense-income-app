import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='max-w-[900px]  container mx-auto md:py-6 py-2 px-4'>
      <h1 className='text-2xl font-semibold my-1 text-slate-800' >Welcome</h1>
      <p className='text-slate-800'>Please sign in to manage your transactions</p>
      <div className=" bg-purple-800 text-white w-[100px] py-2 px-4 rounded-md my-2 flex justify-center items-center">
        <SignInButton />
      </div>
    </div>
  );
};

export default Guest;