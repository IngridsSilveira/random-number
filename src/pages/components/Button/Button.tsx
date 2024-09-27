interface ButtonProps {
    color: string;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}
const colorButton: { [key: string]: string } = {
    black: "bg-black",
    blue: "bg-blue-700",
    red: "bg-red-700",
  };
export const Button: React.FC<ButtonProps> = ({color, label, onClick}) => {
    const colorClass = colorButton[color] || "bg-green-600";
    return (
        <button 
        className={`${colorClass} mr-3 py-2 px-5 text-white font-bold font-sans rounded`}
        onClick={onClick}
        type="button"
        >{label}</button>
    )
}