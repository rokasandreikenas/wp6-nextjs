import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div>
      <h1 className="heading">Sveiki</h1>
      <Link href="/kontaktai">Pereiti į kontaktus</Link>{" "}
      <Link href="/apie-mus">Pereiti į apie mus</Link>
    </div>
  );
}
