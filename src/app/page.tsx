import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Upload, Users } from "lucide-react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Dashboard() {
  return (
    <>
      <section
        className="relative overflow-hidden flex pt-24 md:pt-28 lg:pt-36 pb-24 lg:pb-96 justify-center text-center bg-cover bg-center bg-blend-multiply"
        style={{
          backgroundImage: `url('/blur.avif')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Adds a dark overlay to blend with
        }}
      >
        <div className="max-w-7xl z-50 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[700px] mx-auto">
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Unlock Knowledge, No Strings Attached
            </h1>
            <p className={`text-base mt-6 ${rubik.className} text-gray-500`}>
              Discover and download high-quality notes from the top students at
              Haldia Institute of Technology, all in one place, and completely
              anonymous. Empowering you to excel without boundaries.
            </p>

            <div className="flex items-center justify-center gap-4 mt-10">
              <Link className="inline-block" href="/get-started">
                <Button
                  size="lg"
                  className="text-sm cursor-pointer bg-blue-600 rounded-full font-semibold tracking-tighter hover:bg-blue-800 transition py-3 px-4"
                >
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
              <a className="inline-block" href="#admin">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-sm cursor-pointer py-3 px-4 transition bg-inherit text-white rounded-full tracking-tighter font-semibold"
                >
                  Become Admin
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -top-[40px] transform -translate-x-1/2 translate-y-1/2 hidden lg:block">
          <Image
            src="/Hero.svg"
            alt="Notes"
            height={800}
            width={800}
            className="transform translate-y-1/2" // Adjusts positioning to hide the lower half
          />
        </div>
      </section>

      <section
        id="admin"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get Admin Access
          </h2>
          {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl"></h2> */}
          <p className="max-w-[600px] pt-3 text-zinc-400 text-base">
            Contribute to our platform by uploading notes and more. Request
            admin access today.
          </p>
        </div>
        <div className="grid max-w-[900px] mx-auto grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 with background image */}
          <Card className="border border-gray-600 backdrop-blur-xl rounded-lg bg-transparent h-[300px] w-full">
            <CardContent className="h-full flex flex-col justify-start p-6">
              <FileText className="w-10 h-10 text-blue-300 mb-4" />{" "}
              {/* Icon positioned on top-left */}
              <h3 className="text-xl text-white mt-6 font-semibold tracking-tighter text-left">
                Upload Notes
              </h3>
              <p className="text-zinc-500 mt-2 dark:text-zinc-400 text-left">
                Share your knowledge by uploading comprehensive notes.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 without background image */}
          <Card
            className="border border-gray-600 rounded-lg bg-blend-multiply bg-cover bg-center h-[300px] w-full"
            style={{
              backgroundImage: `url('/blur.avif')`,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <CardContent className="p-6 h-full flex flex-col justify-start">
              <Upload className="w-10 h-10 text-green-300 mb-4" />{" "}
              {/* Icon positioned on top-left */}
              <h3 className="text-xl text-white mt-6 font-semibold text-left">
                Contribute Content
              </h3>
              <p className="text-zinc-600 mt-2  text-left">
                Add valuable content to help others learn and grow.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 without background image */}
          <Card className="border border-gray-600 rounded-lg backdrop-blur-xl bg-transparent h-[300px] w-full">
            <CardContent className="p-6 h-full flex flex-col justify-start">
              <Users className="w-10 h-10 text-purple-300 mb-4" />{" "}
              {/* Icon positioned on top-left */}
              <h3 className="text-xl font-semibold mt-6 text-white text-left">
                Join Admin Team
              </h3>
              <p className="text-zinc-600 mt-2 text-left">
                Become part of our admin team and help manage the platform.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-10">
          <a href="https://berozzgar.sanity.studio/" target="_blank">
            <Button className="bg-blue-600 rounded-full hover:bg-blue-700 text-white font-semibold transition tracking-tighter py-2 px-4">
              Request Admin Access
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
