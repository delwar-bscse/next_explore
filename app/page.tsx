import { MdOutlineGroups } from "react-icons/md";
import NewUserChart from "./components/charts/NewUserChart";
import MostViewedRecipesChart from "./components/charts/MostViewedRecipesChart";
import TrendingRecipes from "./components/charts/TrendingRecipes";
import UserEngagementChart from "./components/charts/UserEngagementChart";

const DashboardCard = () => (
  <div className="flex items-center gap-4 bg-white p-8 rounded-xl">
    <div className="bg-gray-100 inline-block px-6 py-4 rounded-full">
      <MdOutlineGroups className="text-5xl text-primary" />
    </div>
    <div className="flex flex-col gap-1 text-lg">
      <span className="text-gray-500">Total User</span>
      <span className="font-bold">12347</span>
    </div>
  </div>
);
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-4 w-full gap-6 py-8">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <NewUserChart />
          </div>
          <div>
            <MostViewedRecipesChart />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 pb-10">
          <div>
            <TrendingRecipes />
          </div>
          <div>
            <UserEngagementChart />
          </div>
        </div>
      </div>
    </div>
  );
}
