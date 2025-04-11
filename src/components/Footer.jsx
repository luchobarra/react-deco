import { PageWrapper } from "./FramerMotion"

export const Footer = () => {
    return (
        <PageWrapper>
            <footer className="bg-[#E4EFE7] text-[#4B4B4B] py-10 ">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
                    {/* Nombre o branding */}
                    <div className="text-lg font-bold tracking-wide">
                        ArmoniaHaus
                    </div>
        
                    {/* Frase destacada */}
                    <div className="text-center md:text-right">
                    <h2 className="text-lg md:text-xl font-semibold">
                        Todo lo que necesitás en un solo lugar
                    </h2>
                    </div>
        
                </div>
        
                {/* Línea divisoria */}
                <div className="border-t border-[#D1BFA6] my-6"></div>
        
                {/* Derechos */}
                <div className="text-center text-xs text-[#A8A8A8]">
                    &copy; {new Date().getFullYear()} UrbanStyle — Todos los derechos reservados.
                </div>
                </div>
            </footer>
        </PageWrapper>   
    );
};
  