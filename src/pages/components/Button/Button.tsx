interface ButtonProps {
    color: string;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}
const colorButton: { [key: string]: string } = {
    red: "bg-red-700",
  };
export const Button: React.FC<ButtonProps> = ({color, label, onClick}) => {
    const colorClass = colorButton[color] || "bg-black";
    return (
        <button 
        className={`${colorClass} py-2 px-4 text-white font-bold font-sans rounded`}
        onClick={onClick}
        type="button"
        >{label}</button>
    )
}