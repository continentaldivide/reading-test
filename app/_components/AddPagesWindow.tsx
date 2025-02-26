import { useState } from "react";
import AddPagesForm from "./AddPagesForm";

export default function AddPagesWindow() {
  const [startPage, setStartPage] = useState<number>(0);
  const [endPage, setEndPage] = useState<number>(1);
  return (
    <div className="flex flex-col gap-4 items-center border border-yellow-500">
      add pages window
      <h1>which pages did you read?</h1>
      <p>image of book here</p>
      <p>dynamic page count here: {endPage - startPage}</p>
      <AddPagesForm
        startPage={startPage}
        endPage={endPage}
        setStartPage={setStartPage}
        setEndPage={setEndPage}
      />
    </div>
  );
}
