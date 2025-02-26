import AddPagesForm from "./AddPagesForm";

export default function AddPagesWindow() {
  return (
    <div className="flex flex-col gap-4 items-center border border-yellow-500">
      add pages window
      <h1>which pages did you read?</h1>
      <p>image of book here</p>
      <p>dynamic page count here</p>
      <AddPagesForm />
    </div>
  );
}
