const ShoeCard = ({ imgUrl, changeBigSho, bigShoeIMG }) => {
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeIMG === imgUrl ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1
    `}
    ></div>
  );
};

export default ShoeCard;
