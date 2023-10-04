import { UserIcon } from '../icons/UserIcon';

export default function Header() {

  return (
    <>
      <header className="flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-md w-full px-10 h-16">
        <div>
          {/* <input type="text" placeholder='Search' className='border p-2 w-96 rounded' /> */}
        </div>
        <div>
          <UserIcon className='w-8 h-8 cursor-pointer' />
        </div>
      </header>
    </>
  );
}
