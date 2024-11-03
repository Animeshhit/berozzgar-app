import { auth, signIn, signOut } from "../auth";
import { Button } from "./ui/button";
import Image from "next/image";
import { LogOut, LogIn } from "lucide-react";

// Define the User type based on your authentication data structure
interface User {
  image?: string | null | undefined;
  // Add other user properties if necessary
}

// Define the Session type to encapsulate the user object
interface Session {
  user?: User | undefined; // user can be null if not authenticated
}

// Define a type that represents the possible return value of the auth function
type AuthResult = Session | null;

export default async function UserAvatar() {
  // Fetch the session, allowing for it to be null
  const session: AuthResult = await auth();

  // If there's no session or user in the session, return null
  if (!session || !session.user)
    return (
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button variant="ghost" className="flex text-white items-center gap-2" type="submit">
          Sign in
          <LogIn />
        </Button>
      </form>
    );

  return (
    <div className="flex items-center gap-3">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button
          variant="ghost"
          className="hidden text-white md:flex items-center gap-2"
          type="submit"
        >
          Sign Out
          <LogOut />
        </Button>
      </form>
      <Image
        width={30}
        height={30}
        src={session.user.image as string}
        alt="User Avatar"
        className="rounded-full"
      />
    </div>
  );
}
