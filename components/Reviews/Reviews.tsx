import OptimizedVideo from "../OptimizedVideo";
import "./style.scss";

import Image from "next/image";

export default function Reviews() {
  return (
    <div className="container drainage-reviews">
      <div className="drainage-reviews__text">
        <h2>
          О нас говорят <br></br>клиенты
        </h2>
        <div className="drainage-reviews__text--description">
          <OptimizedVideo videoName="review1" />
        </div>
      </div>
      <div className="drainage-reviews--dec">
        <Image
          src="/images/dec2-half-big-right-2.png"
          alt=""
          width={262}
          height={482}
        />
      </div>
    </div>
  );
}
