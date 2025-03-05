// src/components/CategoriesList.js

const CategoriesList = () => {
    const categories = ["Sillas", "Mesas", "Sofás", "Decoración"];
  
    return (
        <ul className="flex gap-6">
            {categories.map((category, index) => (
            <li
                key={index}
                className="cursor-pointer text-[#EEEEEE] text-lg relative 
                        transition-all duration-200 
                        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] 
                        before:bg-[#FAF3E0] before:transition-all before:duration-300
                        hover:before:w-full hover:text-[#FAF3E0] 
                        active:scale-95 active:bg-[#31363F] active:rounded-lg px-2"
            >
                {category}
            </li>
            ))}
        </ul>
    );
};    

export default CategoriesList;