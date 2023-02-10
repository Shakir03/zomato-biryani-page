import Product from "../../common/Product.component";
import Shimmer from "../../common/Shimmer.component";

function Products({ headerInfo, restData, isLoading }) {
  // console.log(restData[0].info);

  return isLoading ? (
    <Shimmer />
  ) : (
    <section className="w-full border border-solid border-blue-400">
      <div className="text-2xl text-gray-700"> {headerInfo?.pageHeading} </div>
      <div>{
        restData?.map(({info},index)=> {
          return <Product key={index} resInfo={info} />
        })
        }</div>
    </section>
  );
}

export default Products;
