import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/Store'

const CardTop = ({ setsideBar }: any) => {
    const { User } = useSelector((state: RootState) => state.user)

    const [AmountVisible, setAmountVisible] = useState(true)

    /* copy to clipboard */

    const textareaRef = useRef<any>(null);

    const copyToClipboard = () => {
      // Select the text in the textarea
        textareaRef.current.value = User.accountNumber;
        
        // Select the text in the textarea
        textareaRef.current.select();
  
      // Copy the selected text to the clipboard
      document.execCommand('copy');
    };

    return (
        <>
            <div onClick={() => setsideBar(false)}>
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg md:px-44">
                    {/* <div className='absolute right-3 text-white'>

                    </div> */}
                   
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-white mt-8 md:mt-0">
                            {User.lastName} {User.firstName}
                        </div>
                        <div className="text-white text-sm font-bold uppercase">xxxx xxxx xxxx 1234</div>
                    </div>
                    <div className="mt-4 text-white text-sm font-bold uppercase tracking-wide md:text-xl">
                    NGN  {AmountVisible ?  User.balance : 'xxxx'}
                        <span className='mx-3 -mt-2 cursor-pointer'>
                            {
                                AmountVisible ? 
                                    <i onClick={()=> setAmountVisible(false)} className="bi bi-eye-fill  text-white"></i>
                                    
                                    :
                                    <i onClick={()=> setAmountVisible(true)} className="bi bi-eye-slash-fill text-white"></i>
                            }
                      
                      </span>
                    </div>
                     <textarea ref={textareaRef} style={{ display:' none' }} />
                    {/* <div className="mt-2 text-xl font-bold text-white">John Doe</div> */}
                    <div className="mt-4 text-white text-sm font-bold uppercase tracking-wide">{User.accountNumber}
                        <i
                            onClick={copyToClipboard}
                            className="bi bi-clipboard text-white mx-3 cursor-pointer"></i>
                    </div>
                    <div className="mt-2 text-sm font-bold text-slate-300">Savings Account</div>
                   
                    

                </div>
            </div>
        </>
    )
}

export default CardTop