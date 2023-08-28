import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <ul>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/protected">
            <a>Protected Page</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
