import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import 'animate.css';

const Question = ({faq}) => {
    
    const [isActive, setIsActive] = useState(false);

    const handleCLick = () => {
        isActive ? setIsActive(false) : setIsActive(true)
    }

    return (
        <div onClick={handleCLick} key={faq.id} className='flex flex-col gap-2 cursor-pointer bg-slate-200 p-3' >
            <div className='flex justify-between items-center' >
                <h2 className='text-xl md:text-2xl'>{faq.question}</h2>
                {isActive ? <Minus /> : <Plus />}
            </div>
            {isActive && <p className="animate__animated animate__fadeIn">{faq.answer}</p>}
        </div>
    )
}

export default Question