import { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name,
      email,
      phone,
    });
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

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="mr-3 text-sm">Name:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.name}</span>
          ) : (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              required
              className="border border-secondary rounded-md p-1.5 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-sm"
            />
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Email:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.email}</span>
          ) : (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
              className="border border-secondary rounded-md p-1.5 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-sm"
            />
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Phone Number:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.phone}</span>
          ) : (
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Enter your phone number"
              required
              className="border border-secondary rounded-md p-1.5 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-sm"
            />
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
