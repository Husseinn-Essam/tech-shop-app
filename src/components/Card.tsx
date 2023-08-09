import { IKImage, IKVideo, IKContext, IKUpload } from "imagekitio-react";
import { StarIcon } from "@heroicons/react/20/solid";
interface cardProps {
  name: string;
  price: number;
  stock: number;
  rating: number;
  images: string[];
}
const Card: React.FC<cardProps> = ({ name, price, stock, rating, images }) => {
  const urlEndpoint = `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKITID}`;
  return (
    <>
      <div className="flex flex-col w-64 h-fit p-2 items-center justify-center border border-red-500  rounded-lg shadow-md">
        <IKContext urlEndpoint={urlEndpoint}>
          <IKImage
            path={images[0]}
            transformation={[
              {
                height: "200",
                width: "200",
              },
            ]}
          />
        </IKContext>
        <div className="text-sm pt-2">{name}</div>
        <p className="font-bold">{price} EGP</p>
        <div className="flex flex-row items-center justify-center">
          Rating:{rating} <StarIcon className="w-5 h-5 pb-1" />
        </div>
      </div>
    </>
  );
};

export default Card;
