// app/page.tsx or pages/index.tsx (for older Next.js versions)
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect from the home page to the /dashboard route
  redirect("/dashboard");
}
