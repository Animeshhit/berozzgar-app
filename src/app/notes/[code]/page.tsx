import { FileText, Clock, HardDrive, ChevronLeft, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import React from "react";
import subjects from "@/lib/subjects";

interface NotesData {
  topic: string;
  publishedAt: string;
  _id: string;
  subjectName: string;
  subjectCode: string;
  noteFile: {
    asset: {
      url: string;
    };
  };
}

const query = groq`
  *[_type == "note" && subjectCode == $code] {
    _id,
    subjectName,
    subjectCode,
    topic,
    noteFile { asset->{ url } },
    publishedAt
  }
`;

export default async function SubjectNotesPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;

  // State to handle notes and loading
  let notes: NotesData[] = [];
  let error: string | null = null;

  // Fetch notes with error handling
  try {
    notes = (await client.fetch(query, { code })) as NotesData[];
  } catch (err) {
    console.error("Error fetching notes:", err);
    error = "Failed to load notes. Please try again later.";
  }

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const subjectDetails = subjects.find((s) => s.code == code);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <Link href={"/get-started"}>
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </Link>

        {subjectDetails && (
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-gray-900 mb-6">{`Notes For ${subjectDetails.name}`}</h1>
        )}

        <Input
          type="text"
          placeholder="Search notes..."
          className="w-full mb-6"
        />

        {error ? (
          <div className="flex flex-col items-center justify-center h-48 text-red-500">
            <p>{error}</p>
          </div>
        ) : notes.length > 0 ? (
          <div className="space-y-4">
            {notes.map((note: NotesData) => (
              <div
                key={note._id}
                className="border border-gray-200 rounded-lg p-2 sm:p-4 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center w-3/5 md:w-full">
                    <FileText className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 truncate">
                      {note.topic}
                    </h2>
                  </div>
                  <a
                    href={note.noteFile.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-2 flex-shrink-0"
                    >
                      Open
                    </Button>
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate text-xs md:text-sm lg:text-base">
                      {formatDate(note.publishedAt)}
                    </span>
                  </span>
                  <span className="flex items-center flex-shrink-0">
                    <HardDrive className="h-4 w-4 mr-1" />
                    {/* Assuming note size logic to be implemented */}
                    <span className="text-xs md:text-sm lg:text-base">
                      {formatFileSize(240000)}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 text-gray-500">
            <Frown className="h-8 w-8 mb-2" />
            <p>Sorry, no notes found. Keep checking!</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Utility function to format file size
const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return bytes + " B";
  else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
  else return (bytes / 1048576).toFixed(1) + " MB";
};
