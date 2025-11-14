import { cn } from "../../libs/utils";
import Select from "./Select";

export interface Options {
  label: string;
  value: string;
}

export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange"
  > {
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  touched?: boolean;
  options?: Options[];
  variant?: "select";
  containerClassName?: string;
}

const Input = ({
  value,
  label,
  onChange,
  error,
  touched,
  variant,
  containerClassName,
  ...props
}: InputProps) => {
  const renderInput = () => {
    switch (variant) {
      case "select":
        return (
          <Select
            value={value as string}
            onChange={onChange}
            options={props.options || []}
          />
        );
      default:
        return (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-gray-100 px-3 py-2 rounded-lg"
            {...props}
          />
        );
    }
  };

  const showError = touched && error;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-2",
        containerClassName
        // "mb-6"
        // showError ? "mb-6" : ""
      )}
    >
      <label className="font-medium">{label}</label>
      {renderInput()}
      {showError && (
        <span className="absolute text-red-600 bottom-[-25px]">{error}</span>
      )}
    </div>
  );
};

export default Input;
