import { AiFillStar } from "react-icons/ai";

function Product({ resInfo }) {
  const { name, image, cuisine, rating, costText, locality } = resInfo;
  return (
    // product container
    <div className=" w-52 sm:w-72 hover:sm:w-80 hover:w-64  p-2 m-2 border border-solid border-red-300 rounded-2xl">
      {/* imagecontainer */}
      <div className="w-58 h-52">
        <img className="w-full h-full rounded-2xl" src={image.url} alt={name} />
      </div>
      {/* restraunt details */}
      <div className="border-b p-2">
        {/* Details top */}
        <div className="flex justify-between">
          <div className="w-10/12 whitespace-nowrap text-ellipsis overflow-hidden">
            {name}{" "}
          </div>
          <div className="flex justify-center items-center rounded-md px-1 bg-green-800 h-5">
            <div className="text-[0.9rem] font-medium pr-1 text-white">
              {rating.aggregate_rating}
            </div>
            <AiFillStar className="text-[0.8rem] text-white" />
          </div>
        </div>
        {/* Details bottom */}
        <div className="flex justify-between">
          <div className="w-1/2 whitespace-nowrap overflow-hidden text-ellipsis">
            {cuisine.map((item) => {
              return <span key={item.name}>{item.name}, </span>;
            })}
          </div>
          <div className="w-1/3 whitespace-nowrap overflow-hidden text-ellipsis ">
            {costText.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
