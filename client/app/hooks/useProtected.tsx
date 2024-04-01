import { redirect } from "next/navigation";
import UserAuth from "./userAuth";

interface ProptectedProps {
  children: React.ReactNode;
}

export default function Protected({ children }: ProptectedProps) {
  const isAuthenticated = UserAuth();

  return isAuthenticated ? children : redirect("/");
}
