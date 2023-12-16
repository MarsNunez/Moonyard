const CommentCard = () => {
  return (
    <div className="py-1">
      <div className="flex gap-4">
        <figure className="w-full max-w-[70px] rounded-full overflow-hidden h-fit">
          <img src="/img/user.png" alt="instructor image" className="w-full" />
        </figure>
        <div>
          <h4>John Doe</h4>
          <div className="flex text-xs gap-[2px] text-indigo-600 items-center my-1">
            <i class="lni lni-star-fill"></i>
            <i class="lni lni-star-fill"></i>
            <i class="lni lni-star-fill"></i>
            <i class="lni lni-star-fill"></i>
            <i class="lni lni-star-fill"></i>
            <p className="text-white pl-1">2 weeks ago</p>
          </div>
          <p className="text-xs leading-5">
            ¡Descubre el fascinante Pytherium, donde cada curso es una puerta
            hacia el dominio de este lenguaje poderoso!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
