export const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-12">
  
        {/* Derechos de Autor */}
        <div className="text-center text-sm text-[#D1BFA6] mt-6">
          &copy; {new Date().getFullYear()} UrbanStyle - Todos los derechos reservados.
        </div>
      </footer>
    );
};