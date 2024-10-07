import Image from '@/components/elements/Image';

export default function Team(): JSX.Element {
  return (
    <>
      <div className="absolute inset-0 flex justify-end items-end  pointer-events-none  z-0">
        <span className="text-[160px] font-bold text-[#d8d8d854] ">LUDESC</span>
      </div>
      <div className="relative flex-1 bg-no-repeat bg-left flex items-center justify-center z-10">
        <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] ">
          <div className="w-full flex justify-center items-start">
            {/* {<!-- Item 1 -->} */}
            <div className="w-full">
              <div className="space-y-6">
                <div className="relative">
                  {/* Container untuk gambar agar tidak melebihi ukuran layar */}
                  <div className="w-full flex justify-center">
                    <Image
                      src="/images/LUDESC TEAM 1.png"
                      alt="Team"
                      layout="intrinsic" // Menggunakan layout intrinsic untuk mencegah guliran
                      width={700} // Lebar yang diinginkan (misalnya, resolusi sesuai konten)
                      height={400} // Tinggi yang sesuai
                      className="object-contain max-w-full max-h-[90vh]" // Agar gambar menyesuaikan container dan tidak melebihi layar
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
