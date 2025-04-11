export const Button = ({ text, onClick, className }) => {
    return (
        <button 
            className={`bg-[#99BC85] px-4 py-2 bg-accent text-black rounded-md hover:bg-opacity-80 transition ${className}`} 
            onClick={onClick}
            >
            {text}
        </button>
    );
};  