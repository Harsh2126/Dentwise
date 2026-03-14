import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div>
      <h1>Dentist AI</h1>

      {!userId && (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      )}

      {userId && <SignOutButton />}
    </div>
  );
}