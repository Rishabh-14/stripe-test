import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProtectedPage() {
  const router = useRouter();

  useEffect(() => {
    if (!document.cookie.includes("loggedIn=true")) {
      router.replace("/login");
    }
  }, []);

  return <div>Welcome to the protected page!</div>;
}
