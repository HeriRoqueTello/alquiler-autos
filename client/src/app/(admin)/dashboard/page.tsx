"use client";

import { redirect } from "next/navigation";

export default function Page() {
  return redirect("/dashboard/home");
}