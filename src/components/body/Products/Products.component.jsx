import { useContext } from "react";
import Product from "../../common/Product.component";
import Shimmer from "../../common/Shimmer.component";

import { useRestrauntsContext } from "../../../utils/context/RestrauntsContext";

function Products() {
  const { restaurantPage, isLoading } = useRestrauntsContext();
  const {
    SECTION_BASIC_INFO: sectionBasicInfo,
    SECTION_SEARCH_RESULT: restrauntsInfo,
  } = restaurantPage;

  return isLoading ? (
    <Shimmer />
  ) : (
    <section className="w-full">
      <div className="text-2xl text-gray-800 ml-2 my-3">
        {" "}
        {sectionBasicInfo?.pageHeading}{" "}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {restrauntsInfo?.map(({ info }, index) => {
          return <Product key={index} resInfo={info} />;
        })}
      </div>
    </section>
  );
}

export default Products;
