import { Field, Input, Label } from "@headlessui/react";

interface Props {
  name: string;
  page: number;
  setPage: (page: number) => void;
}
export default function InputField({ name, page, setPage }: Props) {
  return (
    <Field className="flex flex-col border border-pink-700">
      <Label>{name}</Label>
      <Input
        className="rounded-md data-[hover]:shadow bg-teal-100/15"
        name={name}
        value={page}
        onChange={(e) => setPage(parseInt(e.target.value))}
      />
    </Field>
  );
}
