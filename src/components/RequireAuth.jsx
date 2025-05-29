/** @format */

// components/RequireAuth.jsx
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const RequireAuth = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

export default RequireAuth;
