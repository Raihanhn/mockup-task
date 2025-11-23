import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#014DCD] text-white flex flex-col items-center px-4">
      {/* NAME */}
      <h1 className="text-4xl md:text-5xl font-bold mt-10 text-center">
        Grant Mitterlehner
      </h1>

      {/* Watch This First */}
      <p className="mt-4 text-lg">Watch This First ⬇</p>

      {/* Video Row */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
        {/* Left Thumbnail */}
        <Image
          src="/insta.png"
          width={180}
          height={320}
          alt="Thumbnail"
          className="rounded-lg shadow-lg"
        />

        {/* Right Orange Box */}
        <div className="bg-[#b63a2a] w-[260px] md:w-[380px] h-[200px] flex items-center justify-center rounded-md text-center px-4">
          <p className="font-semibold text-lg">
            ****VIDEO OF ME WALKING
            <br />
            THROUGH THE WEBSITE
          </p>
        </div>
      </div>

      {/* YouTube */}
      <div className="flex items-center gap-2 mt-12 text-3xl font-semibold">
        <span>YouTube</span>
        <Image src="/youtube.jpeg" width={40} height={40} alt="YouTube" />
      </div>

      {/* 1. Packaging Title */}
      <h2 className="text-2xl md:text-3xl font-bold mt-10">1. Packaging</h2>

      {/* Packaging Single Image */}
      <div className="mt-6 max-w-3xl w-full flex justify-center">
       <Image
  src="/packaging.png"
  width={700}
  height={400}
  alt="Packaging"
  className="rounded-lg shadow-lg w-full object-cover"
/>
      </div>

      {/* Specific Improvements */}
      <h3 className="text-xl md:text-2xl font-semibold mt-14">
        Specific Improvements
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-5xl">
        <Image
          src="/thumb1.jpg"
          width={350}
          height={400}
          alt="Improve1"
          className="rounded-lg shadow"
        />
        <Image
          src="/thumb2.jpg"
          width={350}
          height={400}
          alt="Improve2"
          className="rounded-lg shadow"
        />
        <Image
          src="/thumb3.jpg"
          width={350}
          height={400}
          alt="Improve3"
          className="rounded-lg shadow"
        />
      </div>

      {/* Improved Thumbnail */}
      <h3 className="text-xl md:text-2xl font-semibold mt-14">
        Improved Thumbnail Example
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl">
        <Image
          src="/thumb1.jpg"
          width={400}
          height={300}
          alt="Thumbnail Example 1"
          className="rounded-lg shadow"
        />
        <Image
          src="/rise.png"
          width={400}
          height={300}
          alt="Thumbnail Example 2"
          className="rounded-lg shadow"
        />
      </div>

      <div className="h-20" />
    </main>
  );
}
