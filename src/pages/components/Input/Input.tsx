interface InputProps {
    id: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<InputProps> = ({id, value, onChange}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg font-mono font-bold text-gray-600">Digite um número:</label>
            <input 
            id={id}
            className="px-1 py-2 rounded shadow-md"
            value={value}
            type="number" 
            onChange={onChange}
            min={1}
            max={50}/>
        </div>
    )
}