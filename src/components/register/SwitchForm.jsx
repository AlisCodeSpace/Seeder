const SwitchForm = ({ switchForm, setSwitchForm}) => {
  return (
    <div className='flex justify-between bg-slate-200 w-full p-2 rounded-sm'>
        <div className='relative w-full'>
            <div className={`absolute w-1/2 rounded-sm bg-primary h-[32px] z-0 transition-transform duration-300 ease-in-out ${switchForm === 'company' ? 'translate-x-full' : 'translate-x-0'}`}></div>

            <button 
                onClick={() => setSwitchForm('user')}
                className={`relative font-medium py-1 w-1/2 z-10 ${switchForm === 'user' ? 'text-white' : 'text-gray-600'}`}
            >
                User
            </button>
            <button 
                onClick={() => setSwitchForm('company')}
                className={`relative font-medium py-1 w-1/2 z-10 ${switchForm === 'company' ? 'text-white' : 'text-gray-600'}`}
            >
                Company
            </button>
        </div>
    </div>
  )
}

export default SwitchForm
