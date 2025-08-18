import { toPng } from "html-to-image";

import {
  ArrowLeft,
  Calendar,
  Code2,
  Download,
  Github,
  Mail,
  MapPin,
  Printer,
  QrCode,
  TimerIcon,
} from "lucide-react";

function TicketDisplay({ ticketData, onBack }) {
  /* toString(36) => 0–9 + a–z 
  .substr(2, 9) => Skips the "0." at the start and takes the next 9 characters */
  const ticketID = `CC2025-${Math.random()
    .toString(36)
    .substr(2, 9)
    .toUpperCase()}`;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    const ticketElement = document.getElementById("conference-ticket");
    if (!ticketElement) return;

    try {
      const dataUrl = await toPng(ticketElement, {
        quality: 0.95,
      });

      const link = document.createElement("a");
      link.href = dataUrl;

      link.download = `Coding-Conference-2025-Ticket ${ticketData.fullName
        .replace(/\s+/g, "-")
        .toLowerCase()}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      /* const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "ticket.png";
      link.click(); */
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  /* 
    Generate PNG → toPng converts the ticket element to a Base64 PNG image.
    Create a link → document.createElement("a") creates a hidden anchor.
    Set download file name → using ticketData.fullName with spaces replaced by -.Click programmatically → triggers a download without user interaction.
    Clean up → removes the link from the DOM after use. 
  */

  /* /\s+/g:
  => \s → matches any whitespace (space, tab, newline).
  => + → means "one or more".
  => g → global flag, replaces all occurrences (not just the first).
  
  So every sequence of spaces in fullName becomes a single -. 
  "John Doe Smith" => "John-Doe-Smith"
  */

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* button */}
          <div className="flex items-center justify-between mb-8">
            <button
              className="group flex items-center text-white hover:text-orange-400 transform hover:-translate-x-1 transition-all duration-200 cursor-pointer"
              onClick={onBack}
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:rotate-180 transition-transform duration-200 ease-out" />
              Back to Form
            </button>

            <div className="flex space-x-4">
              <button
                className="group flex items-center px-4 py-2 font-semibold text-white rounded-lg shadow-md hover:shadow-lg bg-gradient-to-l from-rose-600 hover:from-rose-700 to-sky-600 hover:to-sky-700 hover:bg-gray-700 transform hover:scale-105 hover:-translate-x-0.5 transition-all duration-200 cursor-pointer"
                onClick={handlePrint}
              >
                <Printer className="w-4 h-4 mr-2 transform group-hover:-rotate-[360deg] transition-transform duration-200 ease-in" />
                Print
              </button>

              <button
                className="group flex items-center px-4 py-2 text-white font-semibold rounded-lg shadow-md hover:shadow-lg bg-gradient-to-r from-sky-600 hover:from-sky-700 to-lime-600 hover:to-lime-700 hover:bg-gray-700 transform hover:scale-105 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2 transform group-hover:rotate-[360deg] transition-transform duration-200 ease-out" />
                Download
              </button>
            </div>
          </div>
          {/* button */}

          {/* ticket */}
          <div
            id="conference-ticket"
            className="bg-white rounded-2xl shadow-2xl print:shadow-none overflow-hidden "
          >
            <div className="relative">
              {/* header */}
              <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-8 text-white relative overflow-hidden">
                {/* background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full transform translate-x-32 -translate-y-32"></div>

                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-24 translate-y-24"></div>
                </div>
                {/* background pattern */}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    {/* header */}
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-orange-500  to-pink-500 p-3 rounded-xl mr-4">
                        <Code2 className="w-8 h-8 text-white" />
                      </div>

                      <div className="space-y-1">
                        <h1 className="text-3xl font-bold">Coding Conf 2025</h1>

                        <h1 className="text-gray-300">
                          The Future of Development
                        </h1>
                      </div>
                    </div>
                    {/* header */}

                    {/* info */}
                    <div className="text-right space-y-2">
                      <p className="text-gray-300 text-sm">Ticket ID</p>

                      <p className="font-mono text-sm">{ticketID}</p>
                    </div>
                    {/* info */}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-orange-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Date</p>
                        <p className="font-semibold">October 15-17, 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Location</p>
                        <p className="font-semibold">Sirajganj, Rajshahi</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <TimerIcon className="w-5 h-5 mr-3 text-orange-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Time</p>
                        <p className="font-semibold">9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* header */}

              {/* body */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex items-center mb-6 md:mb-0">
                    <div className="mr-6">
                      {/* conditional rendering */}
                      {ticketData.avatar ? (
                        <img
                          src={ticketData.avatar}
                          alt={ticketData.fullName}
                          className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                        />
                      ) : (
                        <div className="w-20 h-20 text-2xl  font-bold text-white flex items-center  justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      )}
                    </div>

                    {/* info */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {ticketData.fullName}
                      </h2>

                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>{ticketData.email}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <Github className="w-4 h-4 mr-2" />
                          <span>{ticketData.githubUsername}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          General Admission
                        </span>
                      </div>
                    </div>
                    {/* info */}
                  </div>

                  {/* qr code */}
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-4 rounded-lg mb-2">
                      <QrCode className="w-16 h-16 text-gray-400 shadow-lg" />
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Scan for entry
                    </p>
                  </div>
                  {/* qr code */}
                </div>

                {/* footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        What's Include
                      </h4>

                      <ul className="space-y-1 list-disc list-inside font-medium marker:text-cyan-500">
                        <li className="before:content-['➤'] before:text-red-500 before:mr-2 list-none">
                          3-day conference access
                        </li>
                        <li>All keynote sessions</li>
                        <li>Workshop participation</li>
                        <li>Networking events</li>
                        <li>conference material</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Important Information
                      </h4>

                      <ul className="space-y-1 list-disc list-inside font-medium marker:text-lime-500">
                        <li className="before:content-['✔'] before:text-green-500 before:mr-2 list-none">
                          Please bring this ticket
                        </li>
                        <li>Doors open at 8:30 AM</li>
                        <li>Photo ID required for entry</li>
                        <li>No refunds after March 1st</li>
                        <li>Visit codingConf.com for updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* footer */}
              </div>
              {/* body */}
            </div>
          </div>
          {/* ticket */}

          {/* success message */}
          <div className="text-center mt-8">
            <p className="text-white text-lg mb-2">
              Your ticket has been generated successfully
            </p>

            <p className="text-gray-300">
              Save this ticket and bring it to the conference. See you there!
            </p>
          </div>
          {/* success message */}
        </div>
      </div>

      {/* footer */}
      <div className="text-center text-lg font-semibold text-rose-400">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://marleydip.netlify.app/"
          target="_blank"
          className="text-emerald-400 hover:text-cyan-400 cursor-pointer"
        >
          Md Sofian Hasan
        </a>
        . All Right Reserved
      </div>
    </>
  );
}

export default TicketDisplay;
