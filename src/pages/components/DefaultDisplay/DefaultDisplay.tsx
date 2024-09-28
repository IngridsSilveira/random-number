import { useState } from "react";
import { Input, Button, Modal } from "../index";

export const DefaultDisplay = () => {
  const [numeroRandom, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 50) + 1
  );
  const [input, setInput] = useState<number>();
  const [buttonClick, setButtonClick] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pontos, setPontos] = useState<number>(10);

  // useEffect(() => {
  //   if (modalVisible !== null) {
  //     document.getElementById("modal")?.classList.remove("hidden");
  //   }
  // }, [modalVisible]);

  const btnGetNumeroAleatorio = () => {
    // Valida se o valor está vazio, negativo, ou fora do intervalo permitido
    if (Number(input) <= 0 || Number(input) > 50) {
      alert("Por favor, insira um número entre 0 e 50.");
      return;
    }

    setPontos(pontos - 1); //diminui os pontos
    setButtonClick(buttonClick + 1); //quantidade de clicks
    setModalVisible(true); //abrindo modal
  };

  const resetNumero = () => {
    setRandomNumber(Math.floor(Math.random() * 50) + 1);
    setInput(0);
    setButtonClick(0);
    setModalVisible(false);
    setPontos(10);
    document.getElementById("inputFocus")?.focus();
  };

  const fecharModal = () => {
    //fechar modal
    setModalVisible(false);
    document.getElementById("inputFocus")?.focus();
  };

  return (
    <main className="flex gap-3 relative">
      {/* div com formulário */}
      <div className="w-72 flex flex-col gap-4 bg-blue-50 p-5 rounded shadow-md max-w-sm">
        <p className="text-sm font-mono font-bold text-gray-600">
          Pontuação: {pontos}
        </p>

        {/* input */}
        <Input
          id="inputFocus"
          value={Number(input)}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        {/* botões */}
        <div className="flex  justify-around">
          <Button color="" label="Advinhar" onClick={btnGetNumeroAleatorio} />
          <Button color="red" label="Resetar" onClick={resetNumero} />
        </div>
        {/* nº de tentativas */}
        <p className="text-center text-xl text-gray-700 font-bold">
          Número de tentativas: <br />
          {buttonClick}
        </p>
      </div>

      {/* modal */}
      {modalVisible && (
        <div id="modal" className="absolute right-0">
          {/* Renderiza o modal com dica e inputValor */}
          <Modal
            dica={Number(input) < numeroRandom ? "maior" : "menor"}
            inputValor={Number(input)}
            numeroAleatorio={numeroRandom}
            pontos={pontos}
            onClick={fecharModal}
          />
        </div>
      )}
    </main>
  );
};
