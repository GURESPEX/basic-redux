import { InputHTMLAttributes, useId } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
}

const Input = ({
  labelName,
  type = "text",
  name,
  value,
  onChange,
  required,
}: Props) => {
  const id = useId();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {labelName && (
        <label htmlFor={id} style={{ textAlign: "left" }}>
          {labelName}
        </label>
      )}
      <input
        value={value}
        style={{ width: "100%", padding: 8, borderRadius: 8 }}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
