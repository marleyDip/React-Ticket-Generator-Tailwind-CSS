import { Code2, Github, Mail, Upload, User } from "lucide-react";
import { useRef, useState } from "react";

function TicketForm({ onGenerateTicket }) {
  const [formData, setFormdata] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: "",
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\s+@\s+\.\s+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.githubUsername.trim()) {
      newErrors.githubUsername = "Github Username is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    /* Object.keys(newErrors) => Extracts the field names that have errors.
    
    .length === 0 => Checks if there are no errors. If length === 0, the form is valid.

    Return value => true → no errors (form valid, safe to submit). false → at least one error (form invalid, block submission).
    */
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.size > 500000) {
      setErrors((prev) => ({
        ...prev,
        avatar: "File size must be less than 500 KB",
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setFormdata((prev) => ({ ...prev, avatar: e.target?.result }));
      setErrors((prev) => ({ ...prev, avatar: undefined }));
    };

    reader.readAsDataURL(file);

    /* FileReader API => Converts file → Base64-encoded string (data URL).
    example: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...

    reader.onload callback, When file is fully read: Store the Base64 result in your form state:

    reader.readAsDataURL(file) => Actually starts reading the file as a data URL.

    ?. (optional chaining) → prevents errors if e.target is null or undefined.
    => If e.target exists → returns e.target.result.
    => If not → returns undefined instead of crashing.
    */
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-3xl">
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-white text-3xl font-bold mb-2">Coding Conf</h1>

          <h2 className="text-white text-2xl font-bold mb-3 leading-tight">
            Your Journey to Coding Conf <br /> 2025 starts here!
          </h2>

          <p className="text-gray-300 text-lg">
            Secure your spot at next year's biggest coding conference
          </p>
        </div>
        {/* header */}

        {/* form */}
        <form className="space-y-6">
          {/* file upload */}
          <div className="block text-white text-sm font-medium mb-3">
            <label>Upload Avatar</label>
          </div>

          <div
            className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 cursor-pointer`}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="images/*"
              className="hidden"
            />

            {/* conditional  rendering */}
            {formData.avatar ? (
              <div className="flex flex-col  items-center">
                <img
                  src={formData.avatar}
                  alt={formData.fullName}
                  className="w-16 h-16 rounded-full object-cover mb-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out"
                />
                <p>Click to Change</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="bg-gray-700 p-3 rounded-full mb-3 mt-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-300 text-sm mb-1">Click to Upload</p>
              </div>
            )}
          </div>

          {/* message */}
          {errors.avatar ? (
            <p className="text-red-400 text-sm font-normal -mt-3">
              {errors.avatar}
            </p>
          ) : (
            <p className="text-gray-400 text-xs font-medium flex items-center -mt-3">
              Upload your photo (JPG or PNG, max size: 500KB)
            </p>
          )}
          {/* <p className="text-gray-400 text-xs flex items-center">
            Upload your photo (JPG or PNG, max size: 500KB)
          </p>

          {errors.avatar && (
            <p className="text-red-400 text-sm">{errors.avatar}</p>
          )} */}
          {/* message */}
          {/* file upload */}

          {/* full name */}
          <div className="mt-5">
            <label className="block text-white text-sm font-medium mb-3">
              Full Name
            </label>

            <div className="relative">
              <User
                className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2
              "
              />

              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full py-3 pl-10 pr-4 bg-gray-800/50 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
              />
            </div>

            {/* error message */}
            {errors.fullName && (
              <p className="text-red-400 text-sm font-normal mt-1">
                {errors.fullName}
              </p>
            )}
            {/* error message */}
          </div>
          {/* full name */}

          {/* email address */}
          <div className="mt-5">
            <label className="block text-white text-sm font-medium mb-3">
              Email Address
            </label>

            <div className="relative">
              <Mail
                className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2
              "
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full py-3 pl-10 pr-4 bg-gray-800/50 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
              />
            </div>

            {/* error message */}
            {errors.email && (
              <p className="text-red-400 text-sm font-normal mt-1">
                {errors.email}
              </p>
            )}
            {/* error message */}
          </div>
          {/* email address */}

          {/* github username */}
          <div className="mt-5">
            <label className="block text-white text-sm font-medium mb-3">
              Github Username
            </label>

            <div className="relative">
              <Github
                className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2
              "
              />

              <input
                type="text"
                id="githubUsername"
                name="githubUsername"
                placeholder="@yourUsername"
                value={formData.githubUsername}
                onChange={handleInputChange}
                className={`w-full py-3 pl-10 pr-4 bg-gray-800/50 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
              />
            </div>

            {/* error message */}
            {errors.githubUsername && (
              <p className="text-red-400 text-sm font-normal mt-1">
                {errors.githubUsername}
              </p>
            )}
            {/* error message */}
          </div>
          {/* github username */}

          <button
            type="submit"
            className="mt-5 w-full px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-orange-500 hover:from-orange-600 to-pink-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2  focus:ring-offset-gray-900 transform hover:scale-[1.02] transition-all duration-200"
          >
            Generate My Ticket
          </button>
        </form>
        {/* form */}
      </div>
    </div>
  );
}

export default TicketForm;
