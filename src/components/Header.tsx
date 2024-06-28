import { checkUser } from '@/libs/checkUser';
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
const Header = async () => {
  const user = await checkUser();
  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="flex justify-between items-center py-6 px-4 text-white max-w-[900px]  container mx-auto ">
        <h2 className='text-xl font-semibold'>
          Expenses Tracker
        </h2>
        <div>
          {
            !user && <div className=" bg-purple-800 text-white w-[100px] py-2 px-4 rounded-md my-2 flex justify-center items-center">
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
          }

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Header;