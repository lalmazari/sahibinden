import LeftSidebar from "../components/sidebarLinks";
import CategoryListings from "../components/CategoryListings";

export default function MarketplacePage() {
  return (
    // <>
    // Main Marketplace Page
    // </>
    <div className="max-w-screen-xl mx-auto flex gap-6 px-4 py-8">
      <LeftSidebar />
      <div className="flex-1">
        <CategoryListings />
      </div>
    </div>
  );
}
