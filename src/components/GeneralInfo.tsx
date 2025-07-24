import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState<Record<string,any>>({
    name: "",
    email: "",
    phone: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setFormData(data);
    setIsEdit(true);
  };

  const handleEdit = () => {
    setIsEdit(false);
  };
  
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium text-secondary">
        General Information
      </h2>

      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label className="mr-3 text-sm">Name:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.name}</span>
          ) : (
            <>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="border border-secondary rounded-md p-1.5 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.name.message)}
                </p>
              )}
            </>
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Email:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.email}</span>
          ) : (
            <>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="border border-secondary rounded-md p-1.5 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </>
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Phone Number:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.phone}</span>
          ) : (
            <>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9]+$/,
                    message: "Enter valid numbers",
                  },
                })}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Enter your phone number"
                className="border border-secondary rounded-md p-1.5 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-sm"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.phone.message)}
                </p>
              )}
            </>
          )}
        </div>

        <div className="flex items-center gap-4 mt-2">
          {!isEdit && (
            <button
              type="submit"
              className="py-1.5 px-5 bg-primary border border-secondary text-white rounded hover:opacity-90 transition cursor-pointer"
            >
              Submit
            </button>
          )}

          <button
            type="button"
            disabled={!isEdit}
            onClick={handleEdit}
            className={`py-1.5 px-5 border rounded transition 
              ${
                isEdit
                  ? "bg-surface text-primary border-primary hover:bg-primary/10 cursor-pointer"
                  : "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
              }`}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfo;
