import PageShell from "@/components/layout/page-shell";
//import InstagramEngagementDashboard from "../../../modules/dashboard/dashboard-view";
import InstagramConnect from "@/components/instagram-connect";

export default function Page() {
  return (
    <PageShell title="Dashboard">
      {/* <InstagramEngagementDashboard /> */}

      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <InstagramConnect />
      </div>
    </PageShell>
  );
}
