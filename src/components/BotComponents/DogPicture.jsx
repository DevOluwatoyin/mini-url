// new file called DogPicture.jsx
import Image from "next/image";
import { useEffect, useState } from "react";

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="a dog" width={300} height={300} />
      ) : (
        <div>
          <iframe
            src="https://giphy.com/embed/swhRkVYLJDrCE"
            width={100}
            height={100}
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DogPicture;
