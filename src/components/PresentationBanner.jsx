import banner from '../assets/banner.jpg';

export const Banner = () => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <img
        src={banner}
        alt="Banner del e-commerce"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-semibold text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] tracking-wide">
          Todo lo que necesitás en un solo lugar
        </h1>
      </div>
    </div>
  );
};