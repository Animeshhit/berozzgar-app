import { Book } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

// Sample subject data
import subjects from "@/lib/subjects";

export default function SubjectsPage() {
  return (
    <section className="relative flex py-12 justify-start text-start grad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-3xl mb-6 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
          Available Subjects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.code}
              className="bg-transparent backdrop-blur-lg rounded-lg p-2 sm:p-4 md:p-6 transition-all duration-300 border border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Book className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-base font-semibold text-gray-200">
                    {subject.name}
                  </h2>
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {subject.code}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <p>
                  Comprehensive Notes with Topic Insights & Problem Solutions
                </p>
              </div>
              <Link className="block" href={`/notes/${subject.code}`}>
                <Button
                  className="w-full mt-4 bg-transparent border-gray-600 text-gray-400 hover:bg-blue-600 transition duration-200"
                  variant="outline"
                >
                  View Notes
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
