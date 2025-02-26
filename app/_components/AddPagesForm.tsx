import InputField from "./InputField";
import { Button } from "@headlessui/react";

export default function AddPagesForm() {
  return (
    <form className="flex flex-col items-center">
      <div className="flex flex-row gap-4">
        <InputField name="starting page:" />
        <InputField name="ending page:" />
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
