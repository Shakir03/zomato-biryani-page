import Breadcrumb from "./Breadcrumb/Breadcrumb.component";
import Products from "./Products/Products.component";

function Body() {
  return (
    <div className="border-2 border-green-500 mx-10">
      {/* Breadcrumb and filters */}
      <Breadcrumb />
      {/* products */}
      <Products />
    </div>
  );
}

export default Body;
