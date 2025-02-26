import InputField from "./InputField";
import { Button } from "@headlessui/react";

interface Props {
  startPage: number;
  endPage: number;
  setStartPage: (page: number) => void;
  setEndPage: (page: number) => void;
}

export default function AddPagesForm({
  startPage,
  endPage,
  setStartPage,
  setEndPage,
}: Props) {
  return (
    <form className="flex flex-col items-center">
      <div className="flex flex-row gap-4">
        <InputField
          name="starting page:"
          page={startPage}
          setPage={setStartPage}
        />
        <InputField name="ending page:" page={endPage} setPage={setEndPage} />
      </div>
      <Button
        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        type="submit"
      >
        Save changes
      </Button>
    </form>
  );
}
