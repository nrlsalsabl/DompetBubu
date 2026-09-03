import BalanceCard from "@/components/user/dashboard/BalanceCard";
import CategorySpending from "@/components/user/dashboard/CategorySpending";
import IncomeExpenseChart from "@/components/user/dashboard/IncomeExpenseChart";
import RecentTransactions from "@/components/user/dashboard/RecentTransactions";
import SummaryCards from "@/components/user/dashboard/SummaryCards";

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <div>
        <p className="text-sm text-bubu-muted">Overview</p>

        <h1 className="mt-1 text-2xl font-bold text-bubu-heading">
          Dashboard
        </h1>
      </div>

      <BalanceCard />

      <SummaryCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <IncomeExpenseChart />
        </div>

        <CategorySpending />
      </div>

      <RecentTransactions />
    </div>
  );
}