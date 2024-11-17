// app/dashboard/page.tsx or pages/dashboard/index.tsx (for older Next.js versions)
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Cynegie || Dashboard",
  description: "This is Next.js Home Page for Cynegie Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
}
