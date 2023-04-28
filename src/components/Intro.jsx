import { GiSoccerBall } from "react-icons/gi";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 100) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div className="bg-gradient-to-b from-transparent to-red-400 pt-10">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-9xl truncate opacity-40 pointer-events-none">
          Root#
        </div>
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-3xl"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-3xl bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Root#
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <GiSoccerBall size={16} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-main ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          root는 유닉스 및 리눅스에서 슈퍼 유저(절대 권한자)로서 시스쳄의
          셧다운, 리부팅, 장치제어, 유저제어, 파일제어 등에 무제한적인 권한을
          가진 사용자를 일컫는다.
        </div>
        <div className="py-4 text-center flex">
          <div>
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-300">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
