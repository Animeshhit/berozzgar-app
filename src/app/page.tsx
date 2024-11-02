import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Upload, Users } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Organize your thoughts with ease
            </h1>
            <p className={`text-xl text-gray-500`}>
              NoteHub helps you capture, organize, and share your ideas
              effortlessly. Take notes, create to-do lists, and collaborate with
              your team in real-time.
            </p>
            <div>
              <Link className="inline-block" href="/get-started">
                <Button size="lg" className="text-sm px-4 py-3">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right ml-1"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src="/Hero.svg" alt="Notes" height={500} width={600} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get Admin Access
          </h2>
          <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Contribute to our platform by uploading notes and more. Request
            admin access today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <FileText className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold">Upload Notes</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-center">
                Share your knowledge by uploading comprehensive notes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <Upload className="w-12 h-12 text-green-500" />
              <h3 className="text-xl font-bold">Contribute Content</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-center">
                Add valuable content to help others learn and grow.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <Users className="w-12 h-12 text-purple-500" />
              <h3 className="text-xl font-bold">Join Admin Team</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-center">
                Become part of our admin team and help manage the platform.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <a href="https://berozzgar.sanity.studio/" target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Request Admin Access
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
