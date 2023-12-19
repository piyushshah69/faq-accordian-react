import Question from '../Question/Question';


const Accordian = () => {

    const FAQs = [
        {
            id: 1,
            question: 'Is this a good product?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
        },
        {
            id: 2,
            question: 'How much does it cost?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
        },
        {
            id: 3,
            question: 'When can I get it?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
        },
        {
            id: 4,
            question: 'How much warrenty I will get?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
        }
    ]

    return (
        <div className='w-4/5 max-w-5xl m-auto py-4 flex flex-col gap-8 md:gap-12'>
            <h1 className='text-center font-semibold text-2xl md:text-3xl'>Freaquently asked question - FAQ</h1>

            <div className='flex flex-col gap-4'>
                {FAQs.map((faq) => {
                    return (
                        <Question key={faq.id} faq={faq} />
                    )
                })}
            </div>
        </div>
    )
}

export default Accordian