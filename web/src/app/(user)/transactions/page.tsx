import TransactionFilters from "@/components/user/transactions/TransactionFilters";
import TransactionHeader from "@/components/user/transactions/TransactionHeader";
import TransactionTable from "@/components/user/transactions/TransactionTable";

export default function TransactionsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <TransactionHeader />

      <TransactionFilters />

      <TransactionTable />
    </div>
  );
}