export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-[106px] px-16 py-10 fixed left-0 top-0 bg-white border border-b-gray-200 z-50">
      <div className="flex gap-3 items-center">
        <img src="/Vector.png" alt="logo" className="w-10 h-10" />
        <p className="font-bold">Tech Kini</p>
      </div>
      {/* <div className="flex gap-5 font-semibold text-gray-500 cursor-pointer">
        <p>Beranda</p>
        <p>Terbaru</p>
        <p>Hiburan</p>
        <p>Gaya Hidup</p>
        <p>Olahraga</p>
        <p>Nasional</p>
        <p>Internasional</p>
       
      </div> */}
    </div>
  );
}
