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
        <div className="flex flex-col gap-1 border-2 p-4 border-black dark:border-white font-semibold">
            <h3 className="text-xl font-bold mb-4">{carrier.role}</h3>
            <h3 className="text-xl font-bold flex items-center flex-wrap">{carrier.name} </h3>
            <span className="text-md text-gray-700 dark:text-slate-200">{carrier.time}</span>
            <span className="text-md text-gray-700 dark:text-slate-200 mb-3">{carrier.location}</span>
            <span className="text-md text-gray-700 dark:text-slate-200">{translateToParagraphs(carrier.description)}</span>
        </div>

    </>
}
export default CarrierCard;