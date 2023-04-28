import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useState } from "react";
import BatchMint from "./BatchMint";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Minting = ({ account }) => {
  const [visible, setVisible] = useState(false);
  const [mintedNft, setMintedNft] = useState();
  const [total, setTotal] = useState();
  const [mount, setMount] = useState();
  const [batch, setBatch] = useState(false);

  const onClickMint = async () => {
    try {
      const mintNft = await contract.methods.mintNft().send({ from: account });

      if (!mintNft.status) return;
    } catch (error) {
      console.error(error);
    }
  };

  const AbleToMount = async () => {
    try {
      if (!contract) return;
      const minted = await contract.methods.totalSupply().call();
      const total = await contract.methods.totalNft().call();
      setMintedNft(minted);
      setTotal(total);
    } catch (error) {
      console.error(error);
    }
  };

  AbleToMount();

  const onClickBatchMint = async () => {
    try {
      const mintNft = await contract.methods
        .batchMint(mount)
        .send({ from: account });

      if (!mintNft.status) return;
    } catch (error) {
      console.error(error);
    }
  };

  const addMount = (e) => {
    e.preventDefault();
    if (!mount) {
      alert("숫자를 입력해주세요");
    } else if (mount < 1) {
      alert("1이상의 정수를 입력해주세요");
    } else if (mount > total - mintedNft) {
      alert("발행가능량을 초과하였습니다.");
    } else if (isNaN) {
      alert("문자를 입력했습니다");
    } else {
      onClickBatchMint();
      setBatch(!batch);
    }
    setMount("");
  };

  return (
    <div className="m-8">
      <div
        className="absolute top-0 left-0"
        onMouseEnter={() => setVisible(!visible)}
      >
        <button
          className="bg-main rounded-full p-1 hover:bg-slate-500 hover:rounded-none"
          onMouseLeave={() => setVisible(!visible)}
        >
          Minting
          {visible && (
            <div className="flex flex-col p-1 bg-green-400 text-sm">
              <button
                className="hover:bg-slate-500 border-b-2"
                onClick={onClickMint}
              >
                1개 Minting
              </button>
              <button
                className=" hover:bg-slate-500 border-b-2"
                onClick={(e) => setBatch(!batch)}
              >
                Batch Minting
              </button>
            </div>
          )}
        </button>
      </div>
      <div>
        {batch && (
          <BatchMint
            account={account}
            mount={mount}
            setMount={setMount}
            addMount={addMount}
            batch={batch}
            setBatch={setBatch}
          />
        )}
      </div>
    </div>
  );
};

export default Minting;
