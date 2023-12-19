import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src="https://placehold.co/600x400" width={600} height={400} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">MainYo Indonesia</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-neutral"><Link href="/">Selengkapnya</Link></button>
    </div>
  </div>
</div>
  );
};

export default Hero;
