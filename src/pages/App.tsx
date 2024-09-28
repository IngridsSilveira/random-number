import { DefaultDisplay } from "./components/DefaultDisplay/DefaultDisplay";

function App() {

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-200">
        <h1 className="text-center text-2xl text-gray-600 font-bold mb-2">Advinhe o Número!!</h1>
        <DefaultDisplay />
    </div>
  );
}

export default App;
