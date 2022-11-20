import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className=" border my-2 ">
      <div className="row">
        <div className="col col-sm-12 col-md-4 col-xl-3">
          <Image
            width={300}
            height={300}
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            class="w-100 h-100  shadow-1-strong rounded mb-3 "
            alt="Boat on Calm Water"
          />
        </div>
        <div className="col">
          <div className="content py-3 px-3">
            <h5>Titulo</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus risus sit amet ex consectetur dignissim. Aenean mattis,
              nibh vel posuere iaculis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
