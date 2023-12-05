export interface ICarrierProps {
    time: string
    name: string
    description: string
    role: string
    location: string
}

interface ICarrier {
    carrier: ICarrierProps
}
const CarrierCard: React.FC<ICarrier> = ({ carrier }) => {

    const translateToParagraphs = (text: string) => {
        const lines = text.split('\n');
        return <>
            {
                lines.map((line, index) => (
                    <div key={index} className="mb-2">{line}</div>
                ))
            }
       </>
    };
    return <>
        <div className="flex flex-col gap-1 text-white bg-zinc-700 dark:bg-transparent bg-opacity-60 border-2 p-4 border-zinc-600 dark:border-white w-[90%] sm:w-[60%]">
            <h3 className="text-xl font-bold mb-4">{carrier.role}</h3>
            <h3 className="text-xl font-bold flex items-center flex-wrap">{carrier.name} </h3>
            <span className="text-sm text-neutral-100">{carrier.time}</span>
            <span className="text-sm text-neutral-100 mb-3">{carrier.location}</span>
            <span className="text-sm text-neutral-100">{translateToParagraphs(carrier.description)}</span>
        </div>

    </>
}
export default CarrierCard;