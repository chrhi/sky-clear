import PageShell from "@/components/layout/page-shell";
import { ConnectBsky } from "@/components/modals/connect-bsky";
import QueueComponent from "@/components/queue";
import { getConnectedAccount } from "@/server/actions/connect.actions";
import { getAllPostsAction } from "@/server/actions/pots.actions";

export default async function Page() {
  const isAccountConneced = await getConnectedAccount();

  const posts = await getAllPostsAction();

  return (
    <PageShell title="Queue">
      <div className="w-full h-screen flex flex-col  items-center ">
        {isAccountConneced.success ? (
          <QueueComponent posts={posts?.data ?? []} />
        ) : (
          <ConnectBsky />
        )}
      </div>
    </PageShell>
  );
}
