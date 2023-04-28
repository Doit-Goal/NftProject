import { useState, useEffect } from "react";

const LandingNftCard = () => {
  const [ranNum1, setRanNum1] = useState(1);
  const [ranNum2, setRanNum2] = useState(1);
  const [ranNum3, setRanNum3] = useState(1);
  const [ranNum4, setRanNum4] = useState(1);

  const imgSrc1 = `${process.env.REACT_APP_H662_IMAGE_URL}/${ranNum1}.png`;
  const imgSrc2 = `${process.env.REACT_APP_H662_IMAGE_URL}/${ranNum2}.png`;
  const imgSrc3 = `${process.env.REACT_APP_Dragon_IMAGE_URL}/${ranNum3}.png`;
  const imgSrc4 = `${process.env.REACT_APP_IMAGE_URL}/${ranNum4}.png`;

  useEffect(() => {
    const inerval = setInterval(() => {
      setRanNum1(Math.floor(Math.random() * 1000) + 1);
      setRanNum2(Math.floor(Math.random() * 1000) + 1);
      setRanNum3(Math.floor(Math.random() * 50) + 1);
      setRanNum4(Math.floor(Math.random() * 100) + 1);
    }, 5000);
    return () => clearInterval(inerval);
  }, []);

  return (
    <>
      <div className="pt-[50px] mt-10 bg-gradient-to-b from-transparent via-slate-500 to-indigo-400">
        <div className="relative max-w-screen-xl mx-auto h-[200px] px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-400 text-9xl truncate opacity-40 pointer-events-none">
            Welcom to LION Market
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <div className="flex relative">
            <img
              className="mt-10 w-[300px] h-[300px] rounded-3xl ml-[60px] "
              src={imgSrc4}
              alt="h662_NFT"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/4 font-bold text-3xl">
              걸작
            </div>
          </div>
          <div className="flex relative">
            <img
              className="mt-10 w-[300px] h-[300px] rounded-3xl ml-[60px] "
              src={imgSrc1}
              alt="h662_NFT"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/4">
              😎😎😎😁😁😁
            </div>
          </div>
          <div className="flex relative">
            <img
              className="mt-10 w-[300px] h-[300px] rounded-3xl ml-[60px] "
              src={imgSrc3}
              alt="h662_NFT"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 font-bold text-3xl text-rose-400">
              주용님 작품
            </div>
          </div>
          <div className="flex relative">
            <img
              className="mt-10 relative w-[300px] h-[300px] rounded-3xl ml-[60px] "
              src={imgSrc2}
              alt="h662_NFT"
            />
            <div className="absolute bottom-0 left-[60px]  w-[300px] h-[300px] bg-gray-950 opacity-70">
              <div className="top-1/2 left-1/2">😎😎😎 h662 - Sold Out</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingNftCard;
