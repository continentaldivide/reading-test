import { useAppStateContext } from "../_context/AppStateContext";
import AddPagesWindow from "./AddPagesWindow";

export default function App() {
  const { appState } = useAppStateContext();
  const list = appState.list.map((listItem: string, i: number) => {
    return <p key={`listItem ${i}`}>{listItem}</p>;
  });
  return (
    <div className="flex flex-col gap-4 items-center border border-pink-500">
      <AddPagesWindow />
      {list}
    </div>
  );
}
