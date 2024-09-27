interface ModalProps {
  dica: string;
  inputValor: number;
  numeroAleatorio: number;
  onClick: () => any;
}

export const Modal: React.FC<ModalProps> = ({
  dica,
  inputValor,
  numeroAleatorio,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-end bg-gray-100 rounded shadow-lg h-60">
      <button
        className="bg-red-600 py-1 px-2 text-white text-lg w-8"
        onClick={onClick}
      >
        &times;
      </button>
      {/* Verifica se é igual*/}
      <div className="m-auto">
        <p className="text-center text-xl text-gray-700 font-bold">
          {inputValor === numeroAleatorio
            ? `Parabéns, você acertou! O número era ${numeroAleatorio}.`
            : `O número é ${dica} que ${inputValor}. Tente novamente!`}
        </p>
      </div>
    </div>
  );
};
