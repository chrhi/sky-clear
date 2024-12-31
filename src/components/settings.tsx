"use client";

import {
  deleteBlueSkyAccount,
  getConnectedAccount,
} from "@/server/actions/connect.actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const Settings = () => {
  const [account, setAccount] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const loadAccount = async () => {
      const response = await getConnectedAccount();
      if (response.success) {
        setAccount(response?.data);
      }
    };
    loadAccount();
  }, []);

  const handleDeleteAccount = async () => {
    const response = await deleteBlueSkyAccount();
    if (response.success) {
      setAccount(null);
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Connected BlueSky Account</CardTitle>
        </CardHeader>
        <CardContent>
          {account ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Account URL</p>
                  <p className="text-sm text-muted-foreground">
                    something here
                  </p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Disconnect Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will disconnect your BlueSky account and delete all
                        scheduled posts. This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteAccount}>
                        Yes, disconnect account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No BlueSky account connected</p>
              <Button className="mt-4" onClick={() => router.push("/connect")}>
                Connect Account
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
