import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import Header from "./components/Header";
import User from "./components/User";
import { fetchUsers } from "./services/users";
import { type ApiError, type FilterType, type IUser } from "./types";
import { filterValidationSchema } from "./validations";

const App = () => {
  const formik = useFormik<FilterType>({
    initialValues: {
      nat: "",
      results: 10,
    },
    validationSchema: filterValidationSchema,
    onSubmit: () => {
      refetch();
    },
  });

  const { data, error, isFetching, isFetched, refetch } = useQuery<
    unknown,
    ApiError | Error,
    IUser[]
  >({
    queryKey: ["users"],
    queryFn: async () => {
      return await fetchUsers(formik.values);
    },
    enabled: false, // to allow manual refetching
  });

  const showUsers = !error && !isFetching;
  const users = data || [];
  const errorMessage =
    (error as ApiError)?.response?.data?.message || (error as Error)?.message;

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="max-w-7xl mx-auto h-full">
        <Header
          formik={formik}
          results={isFetched && showUsers ? users.length : undefined}
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.map((item) => (
            <User key={item.id} {...item} />
          ))}
        </div>
        {users.length === 0 && showUsers && (
          <div className="text-center text-gray-500 mt-10">
            No users to display. Please use the form above to fetch users.
          </div>
        )}
        {errorMessage && (
          <div className="text-center text-red-600 mt-10">{errorMessage}</div>
        )}
        {isFetching && (
          <div className="text-center text-gray-500 mt-10">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default App;
