import { useEffect, useState } from "react";
import { Input, Button, Modal } from "../index";

export const DefaultDisplay = () => {
  const [numeroRandom, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 100) + 1
  );
  const [input, setInput] = useState<number>(0);
  const [buttonClick, setButtonClick] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (modalVisible !== null) {
      document.getElementById("modal")?.classList.remove("hidden");
    }
  }, [modalVisible]);

  const btnGetNumeroAleatorio = () => {
    // Valida se o valor está vazio, negativo, ou fora do intervalo permitido
    if (!input || input <= 0 || input > 100) {
      alert("Por favor, insira um número entre 0 e 100.");
      return;
    }
    //Quantidade de clicks
    setButtonClick(buttonClick + 1);

    setModalVisible(true); //abrindo modal
  };

  const resetNumero = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setInput(0);
    setButtonClick(0);
    setModalVisible(false);
    document.getElementById("inputFocus")?.focus();
  };

  const fecharModal: any = () => {
    //fechar modal
    setModalVisible(false);
    document.getElementById("inputFocus")?.focus();
  };

  return (
    <main className="flex gap-3 relative">
      {/* div com formulário */}
      <div className="bg-blue-50 p-4 rounded shadow-md">
        {/* formulário */}
        <form className="flex flex-col justify-center gap-4 w-60">
          {/* input */}
          <Input
            id="inputFocus"
            value={input}
            onChange={(e) => setInput(Number(e.target.value))}
          />
          {/* botões */}
          <div className="m-auto">
            <Button
              color="blue"
              label="Advinhar"
              onClick={btnGetNumeroAleatorio}
            />
            <Button color="red" label="Resetar" onClick={resetNumero} />
          </div>
        </form>

        {/* div de tentativas */}
        <div>
          <p className="text-center text-xl text-gray-700 font-bold mt-3">
            Número de tentativas:
          </p>
          <p className="text-center text-xl text-gray-700 font-bold">
            {buttonClick}
          </p>
        </div>
      </div>

      {/* modal */}
      {modalVisible && (
        <div id="modal" className="absolute right-0">
          {/* Renderiza o modal com dica e inputValor */}
          <Modal
            dica={input < numeroRandom ? "maior" : "menor"}
            inputValor={input}
            numeroAleatorio={numeroRandom}
            onClick={fecharModal}
          />
        </div>
      )}
    </main>
  );
};
