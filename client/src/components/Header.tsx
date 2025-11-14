import type { FilterType } from "../types";
import Input, { type InputProps, type Options } from "./Input";
import { UsersIcon } from "../assets";
import type { FormikProps } from "formik";

interface HeaderProps {
  results: number;
  formik: FormikProps<FilterType>;
}

const Header = ({ results, formik }: HeaderProps) => {
  const countries: Options[] = ["All Countries"].map((item) => ({
    label: item,
    value: item,
  }));

  const { values, handleChange, handleSubmit, touched, errors } = formik;

  const fields: Partial<InputProps>[] = [
    {
      label: "Country",
      name: "country",
      variant: "select",
      options: countries,
    },
    { label: "Number of Users to Fetch", name: "users", type: "number" },
  ];

  return (
    <div>
      {/* Info */}
      <div className="flex flex-col gap-2 mb-4">
        {/* title */}
        <div className="flex items-center gap-2">
          <img src={UsersIcon} alt="Users" className="w-6 h-6" />
          <span>Users & Their Pets</span>
        </div>
        {/* Subtitle */}
        <span>
          Browse users from different countries and see their beloved pets
        </span>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white p-5 rounded-lg shadow-md gap-5 pb-7"
      >
        {/* Fields */}
        {fields.map((item) => (
          <Input
            {...item}
            key={item.name}
            error={errors[item.name as keyof FilterType] as string}
            touched={touched[item.name as keyof FilterType]}
            value={values[item.name as keyof FilterType] as string}
            onChange={(value) =>
              handleChange({ target: { name: item.name, value } })
            }
          />
        ))}
        {/* Action Button */}
        <div className="flex gap-5 items-end">
          <button className="whitespace-nowrap w-fit h-fit flex items-center bg-black text-white px-6 py-2 rounded-lg">
            Fetch Data
          </button>
          {/* Results */}
          <span className="font-light whitespace-nowrap">
            Showing
            <span className="font-bold"> {results}</span> users
          </span>
        </div>
      </form>
    </div>
  );
};

export default Header;
