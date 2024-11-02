import { Book, Clock } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

// Sample subject data
const subjects = [
  { name: "ELECTRICAL MACHINES – II", code: "PC-EE-501" },
  { name: "Power Systems-I", code: "PC-EE-502" },
  { name: "CONTROL SYSTEM", code: "PC-EE-503" },
  { name: "Data Structure and Algorithm", code: "OE-EE-501A" },
  { name: "Digital Signal Processing", code: "PE-EE-501A" },
  { name: "ELECTRICAL MACHINES -II LABORATORY", code: "PC-EE-591" },
  { name: "POWER SYSTEM-I LABORATORY", code: "PC-EE-592" },
  { name: "CONTROL SYSTEM LABORATORY", code: "PC-EE-593" },
  { name: "Data Structure and Algorithm Lab", code: "OE-EE-591A" },
];

export default function SubjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Available Subjects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.code}
            className="bg-white rounded-lg p-6 transition-all duration-300 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Book className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-base font-semibold text-gray-900">
                  {subject.name}
                </h2>
              </div>
              <span className="text-xs font-medium text-gray-500">
                {subject.code}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              Last updated: 24/09/2024
            </div>
            <Link className="block" href={`/notes/${subject.code}`}>
              <Button className="w-full mt-4" variant="outline">
                View Notes
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
