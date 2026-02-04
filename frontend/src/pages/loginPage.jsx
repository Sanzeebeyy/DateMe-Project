function Login({isModal, onClose}) {

    // const wrapper = isModal ? 'div' : 'div'

    const handleSubmit = (e) => {
        e.preventDefault();

        // post or fetch
        
    }

    return (
        
        <>
            <div className={isModal ? 'fixed inset-0 bg-black/95 flex items-center justify-center z-50' : ''}>

                <div className=" relative">
                    {isModal &&
                        <button onClick={onClose} className="absolute top-35 right-6 text-white text-xl cursor-pointer">
                            ✕
                        </button>}



                    <div className="w-110 h-160 border-8 border-(--primary-color) mx-auto my-30 rounded-4xl bg-(--bg-color) register-card">

                        <img src="\1x\logo3.png" alt="" width="200" className="mx-auto my-10 rounded-3xl" />

                        <div className=" text-(--secondary-color) text-4xl max-w-75 mx-auto text-center font-extrabold flex flex-row gap-2">
                            <span className=" font-medium">Login</span>
                            <span className=" font-extralight">to</span>
                            <span className="text-(--primary-color)">Date</span>
                            <span>Me</span>
                        </div>

                        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-max items-center mx-auto mt-7">
                            <input type="text" placeholder="Username" className="border-2 rounded-xl text-(--secondary-color) pt-3 pb-3 px-7 " />
                            <input type="password" placeholder="Password" className="border-2 rounded-xl text-(--secondary-color) pt-3 pb-3 px-7 mt-5" />
                            <button className="my-10 bg-(--primary-color) text-(--secondary-color) py-3 px-10 rounded-2xl cursor-pointer ">Log In</button>
                        </form>

                    </div>




                </div>

            </div>
        </>

    )
}


export default Login;
