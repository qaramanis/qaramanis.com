export default function Awards() {
  return (
    <div className="py-[4rem]">
      <div className="">Awards & Honors</div>
      <div className="pt-[2rem] flex justify-between items-start border-b border-[#666666] hover:border-white relative overflow-hidden group transition-all duration-500 ease-out">
        <div className="pb-[1rem]">
          <div>Netcompany Hackathon</div>
          <p className="text-[#666666]">1st place | AI Travel Agent</p>
        </div>
        <div className="text-[#666666]">Feb. 21 2025</div>
        <div className="absolute bottom-0 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
      </div>
    </div>
  );
}
