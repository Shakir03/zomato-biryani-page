import useRestaurantPageData from "../../utils/customHooks/useRestaurantPageData";
import Breadcrumb from "./Breadcrumb/Breadcrumb.component";
import Products from "./Products/Products.component";

function Body() {
  const { restaurantPage, isLoading } = useRestaurantPageData();
  const {
    SECTION_BREADCRUMBS_INFO: sectionBreadcrumb,
    SECTION_BASIC_INFO: sectionBasicInfo,
    SECTION_SEARCH_RESULT: restrauntsInfo,
  } = restaurantPage;

  return (
    <div className="border-2 border-green-500 h-[90vh]">
      {/* Breadcrumb and filters */}
      <Breadcrumb data={sectionBreadcrumb} />
      {/* products */}
      <Products
        headerInfo={sectionBasicInfo}
        restData={restrauntsInfo}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Body;
