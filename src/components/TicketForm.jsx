import { Code2, Github, Mail, Upload, User } from "lucide-react";

function TicketForm() {
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
          >
            <input type="file" className="hidden" />

            {/* conditional  rendering */}

            <div className="flex flex-col  items-center">
              <img
                src=""
                alt=""
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <p>Click to Change</p>
            </div>

            {/* else */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-700 p-3 rounded-full mb-3 mt-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
                <Upload className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-300 text-sm mb-1">Click to Upload</p>
            </div>
            {/* else */}

            {/* message */}
            <p className="text-gray-400 text-xs mt-2 flex items-center">
              Upload your photo (JPG or PNG, max size: 500KB)
            </p>

            {/* error message */}
            <p className="text-red-400 text-sm mt-1"></p>
            {/* error message */}
            {/* message */}
          </div>
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
                className={`w-full py-3 pl-10 pr-4 bg-gray-800/50 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
              />
            </div>

            {/* error message */}
            <p className="text-red-400 text-sm mt-1"></p>
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
                className={`w-full py-3 pl-10 pr-4 bg-gray-800/50 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
              />
            </div>

            {/* error message */}
            <p className="text-red-400 text-sm mt-1"></p>
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
                className={`w-full py-3 pl-10 pr-4 bg-gray-800/50 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
              />
            </div>

            {/* error message */}
            <p className="text-red-400 text-sm mt-1"></p>
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
