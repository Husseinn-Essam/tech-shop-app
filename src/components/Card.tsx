import React from "react";
import IKContext from "./IKContext";
import IKImage from "./IKImage";
import { StarIcon } from "@heroicons/react/20/solid";
import AddToCartBtn from "./AddToCartBtn";
interface CardProps {
  name: string;
  price: number;
  stock: number;
  rating: number;
  images: string[];
}

const Card: React.FC<CardProps> = ({ name, price, stock, rating, images }) => {
  const urlEndpoint = `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKITID}`;

  return (
    <div className="card-container relative group">
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

      <AddToCartBtn />
    </div>
  );
};

export default Card;
