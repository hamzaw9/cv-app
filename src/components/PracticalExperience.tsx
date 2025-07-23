import { useState } from "react";

function PracticalExperience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    fromDate: "",
    toDate: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ company, position, responsibilities, fromDate, toDate });
    setIsEdit(true);
  };

  const handleEdit = () => {
    setIsEdit(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium text-secondary">
        Practical Experience
      </h2>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="mr-3 text-sm">Company Name:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.company}</span>
          ) : (
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Enter company name"
              required
              className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Position Title:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.position}</span>
          ) : (
            <input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              type="text"
              placeholder="Enter position title"
              required
              className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Main Responsibilities:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.responsibilities}</span>
          ) : (
            <textarea
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              placeholder="Enter job responsibilities"
              required
              className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
            />
          )}
        </div>

        <div className="flex gap-4">
          <div>
            <label className="mr-3 text-sm">From:</label>
            {isEdit ? (
              <span className="text-sm text-gray-700">{formData.fromDate}</span>
            ) : (
              <input
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                type="date"
                required
                className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            )}
          </div>

          <div>
            <label className="mr-3 text-sm">To:</label>
            {isEdit ? (
              <span className="text-sm text-gray-700">{formData.toDate}</span>
            ) : (
              <input
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                type="date"
                required
                className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          {!isEdit && (
            <button
              type="submit"
              className="py-1.5 px-5 bg-primary text-white border border-secondary rounded hover:opacity-90 transition"
            >
              Submit
            </button>
          )}
          <button
            type="button"
            disabled={!isEdit}
            onClick={handleEdit}
            className={`py-1.5 px-5 border rounded transition ${
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

export default PracticalExperience;
