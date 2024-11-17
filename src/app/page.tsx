import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/Dashboard";

export const metadata: Metadata = {
  title:
    "Cynegie || Dashboard",
  description: "This is Next.js Home Page for Cynegie Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        < HomePage/>
      </DefaultLayout>
    </>
  );
}
