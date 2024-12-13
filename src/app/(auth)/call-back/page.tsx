"use client";

import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import { syncUser } from "@/lib/actions/auth.actions";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    syncUser()
      .then((data) => {
        console.log(data);
        console.log("this is the user data we need");
        router.push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  }, [router]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-y-2">
      <h2 className="text-lg text-gray-700 text-center">
        syncing your account data
      </h2>
      <h2 className="text-sm text-gray-500 text-center">
        just a moment please wait...
      </h2>
      <Icons.spinner />
    </div>
  );
}
