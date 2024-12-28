// import { getConnectedAccount, connectBlueSkyAccount } from "@/actions/connect";
import PageShell from "@/components/layout/page-shell";
//import { ConnectBsky } from "@/components/modals/connect-bsky";
import QueueComponent from "@/components/queue";

export default async function Page() {
  return (
    <PageShell title="Queue">
      <div className="w-full h-screen flex flex-col  items-center ">
        {/* <ConnectBsky /> */}

        <QueueComponent />
      </div>
    </PageShell>
  );
}
