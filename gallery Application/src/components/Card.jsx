function Card(props) {
  return (
    <div className="h-52 w-52 flex flex-col  align-middle">
      <img
        className="h-40 w-52  object-cover rounded-2xl"
        src={props.link}
        alt=""
      />
      <h3 className="text-xl h-fit w-fit mx-auto text-amber-50">
        {props.imgname}
      </h3>
    </div>
  );
}
export default Card;
