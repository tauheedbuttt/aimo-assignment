import { CalendarIcon, MailIcon, PhoneIcon, PhotoIcon } from "../assets";
import type { IUser } from "../types";

const User = (user: IUser) => {
  const details = [
    { key: "email", icon: MailIcon, value: user.email },
    { key: "phone", icon: PhoneIcon, value: user.phone },
    {
      key: "dob",
      icon: CalendarIcon,
      value: new Date(user.dob.date).toLocaleDateString(),
    },
  ];
  return (
    <div className="bg-whiterounded shadow">
      <div
        className="relative bg-no-repeat bg-center bg-gray-50"
        style={{
          backgroundImage: `url(${PhotoIcon})`,
          backgroundSize: "40px 40px",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={user.petImage}
          alt={user.name}
          className="w-full h-52 object-cover rounded"
        />
      </div>
      <div className="p-5 flex items-start justify-between">
        {/* Details */}
        <div className="flex flex-col gap-2 items-start">
          <div>{user.name}</div>
          <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-sm">
            {user.country}
          </div>
          <div className="flex flex-col gap-1 mt-2">
            {details.map((detail) => (
              <div
                key={detail.key}
                className="flex items-center gap-2 text-sm text-light text-gray-500"
              >
                <img src={detail.icon} alt={detail.key} className="w-4 h-4" />
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Age */}
        <div className="flex flex-col text-sm text-gray-500">
          <span>{user.dob.age}</span>
          <span>Years</span>
        </div>
      </div>
    </div>
  );
};

export default User;
