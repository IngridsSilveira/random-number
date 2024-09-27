import { useEffect, useState } from "react";
import { Input, Button, Modal } from "../index";

export const DefaultDisplay = () => {
  const [input, setInput] = useState<number>(0);
  const [buttonClick, setButtonClick] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  let numeroRandom = Math.floor(Math.random() * 101);

  useEffect(() => {
    if (modalVisible !== null) {
      document.getElementById("modal")?.classList.remove("hidden");
    }
  }, [modalVisible]);

  const abrirModal: any = () => {
    //abrindo modal
    setModalVisible(true);
  };

  const fecharModal: any = () => {
    //fechar modal
    setModalVisible(false);
  };

  const numeroAleatorio = () => {
    const inputValor = input;

    // Valida se o valor está vazio, negativo, ou fora do intervalo permitido
    if (!inputValor || inputValor <= 0 || inputValor > 100) {
      alert("Por favor, insira um número entre 0 e 100.");
      return;
    }

    //Quantidade de clicks
    setButtonClick(buttonClick + 1);

    document.getElementById("inputFocus")?.focus();
    abrirModal();
  };
  const resetNumero = () => {
    setInput(0);
    setButtonClick(0);
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
            <Button color="blue" label="Advinhar" onClick={numeroAleatorio} />
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
            dica={input < Number(numeroRandom) ? "maior" : "menor"}
            inputValor={input}
            numeroAleatorio={Number(numeroRandom)}
            onClick={fecharModal}
          />
        </div>
      )}
    </main>
  );
};
