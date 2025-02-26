import { Field, Input, Label } from "@headlessui/react";

export default function InputField({ name }: { name: string }) {
  return (
    <Field className="flex flex-col border border-pink-700">
      <Label>{name}</Label>
      <Input className="rounded-md data-[hover]:shadow bg-teal-100/15" name={name} />
    </Field>
  );
}
