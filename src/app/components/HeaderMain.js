
export default function HeaderMain() {
  return (
    <div className='border-b border-gray-300 py-6'>
        <div className="container sm:flex justify-between items-center">
            <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blacklish">Logo</div>

            <div className="w-full sm:w-[300px] md:w-[70%] relative">
                <input className="border-gray-300 border p-2 px-4 rounded-lg w-full" 
                type="text" placeholder="Enter any product name..." />
            </div>

        </div>   
    </div>
  )
}
