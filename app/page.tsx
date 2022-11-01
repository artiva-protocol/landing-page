import localFont from "@next/font/local";
import Image from "next/image";

// Font files can be colocated inside of `app`
const monument = localFont({ src: "./MonumentExtended-Bold.ttf" });
const migra = localFont({ src: "./Migra-Regular.ttf" });
const montreal = localFont({ src: "./NeueMontreal-Regular.ttf" });

export default async function Home() {
  return (
    <div className="bg-black">
      <div className="relative h-[95vh] w-full">
        <Background />
        <Header />
        <Hero />
      </div>
      <AppSection />
      <DAOSection />
      <DevSection />
      <Footer />
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
    <div className="flex items-center justify-between p-6 px-10">
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
      <div className="z-20 items-center flex">
        <a className="text-white text-md mr-1 rounded-md h-8 flex items-center opacity-70 px-6">
          Twitter
        </a>
        <a className="text-white text-md mr-1 rounded-md h-8 flex items-center opacity-70 px-6">
          Discord
        </a>
        <a className="text-white text-md mr-1 rounded-md h-8 flex items-center opacity-70 px-6">
          Developers
        </a>
        <a className="text-white text-md mr-2 rounded-md h-8 flex items-center opacity-70 px-6">
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
    <div className={"absolute z-20 bottom-10 left-10"}>
      <div className={migra.className + " text-white text-7xl "}>
        Own your platform
      </div>
      <div
        className={montreal.className + " text-2xl mt-6 text-white opacity-80"}
      >
        Artiva V2 takes your collaborations, content and <br /> community
        onchain
      </div>
    </div>
  );
};

const AppSection = () => {
  return (
    <div className="bg-black h-[90vh]">
      <div className="flex items-center justify-around h-full w-full">
        <div className="flex items-center">
          <div className="mr-40">
            <Image
              src={"/icons/app-logo.svg"}
              alt="App Icon"
              width={300}
              height={300}
            />
          </div>
          <div>
            <div
              className={
                monument.className +
                " text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#E7F1BC] to-[#1990B3]"
              }
            >
              Explore the app
            </div>
            <div className="text-2xl text-white mt-6">
              Deploy, curate and customize a platform for <br /> you and your
              community.
            </div>
            <div className="mt-12 flex">
              <a className="text-black cursor-pointer flex items-center justify-around font-bold rounded-md h-8 w-52 bg-gradient-to-r from-[#E7F1BC] to-[#1990B3]">
                Launch App
              </a>
              <a className="text-gray-300 cursor-pointer flex items-center justify-around ml-4 font-bold rounded-md h-8 w-52 border border-gray300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DAOSection = () => {
  return (
    <div className="bg-black h-[90vh] border-t border-gray-700">
      <div className="flex items-center justify-around h-full w-full">
        <div className="flex items-center">
          <div className="mr-40">
            <div
              className={
                monument.className +
                " text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FDA0E3] to-[#ad1db8]"
              }
            >
              Join the DAO
            </div>
            <div className="text-2xl text-white mt-6">
              Control the DAO treasury, vote for onchain proposals <br /> and
              propagate the Artiva brand.
            </div>
            <div className="mt-12 flex">
              <a className="text-black cursor-pointer flex items-center justify-around font-bold rounded-md h-8 w-52 bg-gradient-to-r from-[#FDA0E3] to-[#ad1db8]">
                View DAO
              </a>
              <a className="text-gray-300 cursor-pointer flex items-center justify-around ml-4 font-bold rounded-md h-8 w-52 border border-gray300">
                Learn More
              </a>
            </div>
          </div>
          <div>
            <Image
              src={"/icons/dao-logo.svg"}
              alt="DAO Icon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DevSection = () => {
  return (
    <div className="bg-black h-[90vh] border-t border-gray-700">
      <div className="flex items-center justify-around h-full w-full">
        <div className="flex items-center">
          <div className="mr-40">
            <Image
              src={"/icons/dev-logo.svg"}
              alt="Dev Icon"
              width={300}
              height={300}
            />
          </div>
          <div>
            <div
              className={
                monument.className +
                " text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FD914C] to-[#b03e19]"
              }
            >
              Build with us
            </div>
            <div className="text-2xl text-white mt-6">
              Get funded by the DAO to build custom themes, unique clients and
              <br /> onchain publishing modules.
            </div>
            <div className="mt-12 flex">
              <a className="text-black cursor-pointer flex items-center justify-around font-bold rounded-md h-8 w-52 bg-gradient-to-r from-[#FD914C] to-[#b03e19]">
                View Docs
              </a>
              <a className="text-gray-300 cursor-pointer flex items-center justify-around ml-4 font-bold rounded-md h-8 w-52 border border-gray300">
                View Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black border-t border-gray-700 h-32 w-full flex justify-around">
      <div className="flex items-center">
        <a className="text-white text-xs rounded-md h-8 flex items-center opacity-70 px-12">
          Twitter
        </a>
        <a className="text-white text-xs rounded-md h-8 flex items-center opacity-70 px-12">
          Discord
        </a>
        <a className="text-white text-xs rounded-md h-8 flex items-center opacity-70 px-12">
          Developers
        </a>
        <a className="text-white text-xs rounded-md h-8 flex items-center opacity-70 px-12">
          DAO
        </a>
        <a className="text-white text-xs rounded-md h-8 flex items-center opacity-70 px-12">
          App
        </a>
      </div>
    </div>
  );
};
