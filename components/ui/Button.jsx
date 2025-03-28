export default function Button({ children }) {
    return (
        <button className="bg-dark-green text-white text-lg font-medium py-[12px] rounded-[4px]">
            {children}
        </button>
    )
}