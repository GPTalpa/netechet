import Image from "next/image";
import "./style.scss";

export default function Certificats() {
  return (
    <div className="container cert">
      <h2>сертификаты</h2>
      <div className="cert__content">
        <div className="cert__item">
          <Image
            src="/images/cert1.png"
            alt="Сертификат"
            width={394}
            height={557}
          />
        </div>
        <div className="cert__item">
          <Image
            src="/images/cert2.png"
            alt="Сертификат"
            width={394}
            height={557}
          />
        </div>
        <div className="cert__item">
          <Image
            src="/images/cert3.png"
            alt="Сертификат"
            width={394}
            height={557}
          />
        </div>
      </div>
    </div>
  );
}
