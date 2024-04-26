import { InputHTMLAttributes, useId } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
}

const CustomInput = ({
  labelName,
  type = "text",
  name,
  value,
  onChange,
  required,
}: Props) => {
  const id = useId();
  return (
    <div className="col">
      {labelName && <Label htmlFor={id}>{labelName}</Label>}
      <Input
        value={value}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default CustomInput;
