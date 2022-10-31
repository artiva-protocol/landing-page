import localFont from "@next/font/local";

// Font files can be colocated inside of `app`
const monument = localFont({ src: "./MonumentExtended-Bold.ttf" });
const migra = localFont({ src: "./Migra-Regular.ttf" });
const montreal = localFont({ src: "./NeueMontreal-Regular.ttf" });

export default async function Home() {
  return (
    <div className="relative h-screen w-full">
      <Background />
      <Header />
      <Hero />
    </div>
  );
}

const Background = () => {
  return (
    <div className="absolute h-full w-full">
      <video
        className="object-cover h-full w-full"
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src="/background.mov" />
      </video>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 px-20">
      <div className="flex items-center">
        <div className={monument.className + " text-white text-xl mr-2 z-20"}>
          ARTIVA
        </div>
        <div
          className={migra.className + " text-white text-2xl opacity-70 z-20"}
        >
          V2
        </div>
      </div>
      <div className="z-20 flex items-center">
        <a className="text-white text-md mr-1 rounded-md h-8 flex items-center px-6">
          Twitter
        </a>
        <a className="text-white text-md mr-1 rounded-md h-8 flex items-center px-6">
          Discord
        </a>
        <a className="text-white text-md mr-1 rounded-md h-8 flex items-center px-6">
          Developers
        </a>
        <a className="text-white text-md mr-2 rounded-md h-8 flex items-center px-6">
          DAO
        </a>
        <a className="text-white text-md border border-white rounded-md h-8 flex items-center px-8">
          Launch App
        </a>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className={" absolute z-20 bottom-28 left-20"}>
      <div className={migra.className + " text-white text-8xl "}>
        Own Your Platform
      </div>
      <div
        className={montreal.className + " text-3xl mt-6 text-white opacity-70"}
      >
        Artiva V2 takes your collaborations, content and community onchain
      </div>
    </div>
  );
};
