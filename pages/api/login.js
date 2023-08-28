import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { password });
      if (response.data.success) {
        setIsLoggedIn(true);
        router.push("/protected");
      } else {
        alert("Incorrect password");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
