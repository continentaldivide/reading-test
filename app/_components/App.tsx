import InputField from "./InputField";

export default function App() {
  return (
    <div className="flex flex-col gap-4 items-center border border-pink-500">
      <h1 className="border border-pink-500">which pages did you read?</h1>
      <div className="flex flex-row gap-4">
        <InputField name="starting page:" />
        <InputField name="ending page:" />
      </div>
    </div>
  );
}
