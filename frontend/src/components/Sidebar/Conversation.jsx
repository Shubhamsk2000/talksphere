

const Conversation = () => {
    return (
        <>
            <div className="flex items-center gap-2 p-2 py-1 my-2 rounded-md cursor-pointer hover:bg-sky-500 hover:text-white" >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user-avatar" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="font-bold">{"name"}</p>
                </div>
            </div>
            <div className="h-1 p-0 m-0 divider"></div>
        </>
    )
}

export default Conversation
