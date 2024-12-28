import { getConnectedAccount, connectBlueSkyAccount } from "@/actions/connect";
import PageShell from "@/components/layout/page-shell";
import { ConnectBsky } from "@/components/modals/connect-bsky";

export default async function Page() {
  console.log("we are connecting an account");
  const connected = await connectBlueSkyAccount({
    identifier: "abdellah.example.com",
    password: "123mahdi",
  });

  console.log("i think we have finished the connection");
  console.log(connected);
  const account = await getConnectedAccount();

  console.log(account.data);
  return (
    <PageShell title="Queue">
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <ConnectBsky />
      </div>
    </PageShell>
  );
}
