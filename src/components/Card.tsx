import { IKImage, IKVideo, IKContext, IKUpload } from "imagekitio-react";
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
      <div className="flex flex-col w-64 h-72 items-center border border-red-500 p-4 rounded-lg shadow-md">
        <IKContext urlEndpoint={urlEndpoint}>
          <IKImage path={images[0]} />
        </IKContext>
        <p>{name}</p>
        <p className="font-bold">{price}$</p>
        <p>Rating:{rating}</p>
      </div>
    </>
  );
};

export default Card;
