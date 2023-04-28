const ranNum1 = Math.floor(Math.random() * 1000) + 1;
const ranNum2 = Math.floor(Math.random() * 1000) + 1;
const ranNum3 = Math.floor(Math.random() * 50) + 1;
const imgSrc1 = `${process.env.REACT_APP_H662_IMAGE_URL}/${ranNum1}.png`;
const imgSrc2 = `${process.env.REACT_APP_H662_IMAGE_URL}/${ranNum2}.png`;
const imgSrc3 = `${process.env.REACT_APP_Dragon_IMAGE_URL}/${ranNum3}.png`;

const LandingNftCard = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
          <div className="flex relative">
            <img
              className="w-[300px] h-[300px] rounded-3xl ml-[60px] "
              src={imgSrc1}
              alt="h662_NFT"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/4">
              😎😎😎 h662
            </div>
          </div>
          <div className="flex relative">
            <img
              className="w-[300px] h-[300px] rounded-3xl ml-[60px] "
              src={imgSrc3}
              alt="h662_NFT"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/4">
              😎😎😎 h662 - 품절
            </div>
          </div>
          <div className="flex relative">
            <img
              className="relative w-[300px] h-[300px] rounded-3xl ml-[60px] "
              src={imgSrc2}
              alt="h662_NFT"
            />
            <div className="absolute bottom-0 left-[60px]  w-[300px] h-[300px] bg-gray-950 opacity-70">
              <div className="top-1/2 left-1/2">😎😎😎 h662 - 품절</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingNftCard;
