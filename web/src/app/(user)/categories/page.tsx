import CategoryHeader from "@/components/user/categories/CategoryHeader";
import CategoryList from "@/components/user/categories/CategoryList";

export default function CategoriesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <CategoryHeader />
      <CategoryList />
    </div>
  );
}