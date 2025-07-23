import { useState } from "react";

function EducationalExperience() {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ school, title, date });
    setIsEdit(true);
  };

  const handleEdit = () => {
    setIsEdit(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium text-secondary">
        Educational Experience
      </h2>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="mr-3 text-sm">School Name:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.school}</span>
          ) : (
            <input
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              type="text"
              placeholder="Enter school name"
              required
              className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Title of Study:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.title}</span>
          ) : (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter study title"
              required
              className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          )}
        </div>

        <div>
          <label className="mr-3 text-sm">Date of Study:</label>
          {isEdit ? (
            <span className="text-sm text-gray-700">{formData.date}</span>
          ) : (
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              required
              className="border border-secondary rounded-md p-1.5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          )}
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

export default EducationalExperience;
