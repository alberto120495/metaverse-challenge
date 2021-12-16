import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-10 ">
        <h1 className="text-6xl font-bold">Welcome to Metaverse</h1>
        <button
          onClick={() => authenticate()}
          className=" bg-blue-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        {/* <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        /> */}

        <video
          className="w-full h-screen object-cover"
          autoPlay
          loop
          muted
          poster="https://links.papareact.com/55n"
        >
          <source src="world.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Login;
