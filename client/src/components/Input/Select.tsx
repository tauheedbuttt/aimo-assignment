import type { Options } from ".";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Options[];
}

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <select
      className="bg-gray-100 px-3 py-2 rounded-lg h-full w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
