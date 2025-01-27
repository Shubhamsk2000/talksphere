
const SearchInput = () => {
    return (
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Search" className="rounded-full input input-bordered" />
            <button type="submit" className="text-white btn-circle bg-sky-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-full p-2 m-auto opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </button>
        </form>
    )
}

export default SearchInput
