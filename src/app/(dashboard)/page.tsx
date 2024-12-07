import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <h1>this is the home page of our saas</h1>

      <Button>this is the best</Button>
      <button className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 active:bg-gray-900 transition-colors duration-200 shadow-sm">
        Go to app
      </button>
    </div>
  );
}
