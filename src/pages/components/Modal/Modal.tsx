interface ModalProps {
  dica: string;
  inputValor: number;
  numeroAleatorio: number;
  pontos: number;
  onClick: () => any;
}

export const Modal: React.FC<ModalProps> = ({
  dica,
  inputValor,
  numeroAleatorio,
  onClick,
  pontos,
}) => {
  return (
    <div className="flex flex-col items-end bg-gray-100 rounded shadow-lg h-72 w-72">
      <button
        className="bg-red-600 py-1 px-2 text-white text-lg w-8"
        onClick={onClick}
      >
        &times;
      </button>
      <div className="m-auto">
        {/* Verifica se é igual*/}
        <p className="text-center text-xl text-gray-700 font-bold">
          {pontos === 0
            ? `Você perdeu!! O número era ${numeroAleatorio}`
            : inputValor === numeroAleatorio
            ? `Parabéns, você acertou! O número era ${numeroAleatorio}.`
            : `O número é ${dica} que ${inputValor}. Tente novamente!`}
        </p>
        <p></p>
        {}
      </div>
    </div>
  );
};
