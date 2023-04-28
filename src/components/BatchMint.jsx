const BatchMint = ({ mount, setMount, addMount, batch, setBatch }) => {
  return (
    <div className="relative">
      <form
        className="absolute top-12 left-0 -ml-[250px] flex text-black"
        onSubmit={addMount}
      >
        <input
          type="text"
          placeholder="숫자를 입력해주세요"
          onChange={(e) => setMount(e.target.value)}
          value={mount}
        ></input>
        <button
          className="w-[35px] h-[24px] rounded-xl hover:bg-slate-500 bg-blue-400"
          type="submit"
        >
          민팅
        </button>
        <button
          className="w-[30px] h-[24px] rounded-xl hover:bg-slate-500 bg-green-400"
          onClick={(e) => setBatch(!batch)}
        >
          닫기
        </button>
      </form>
    </div>
  );
};

export default BatchMint;
