function Register({isModal, onClose}) {

    // const wrapper = isModal ? 'div' : 'div'

    return (
        
        <>
            <div className={isModal ? 'fixed inset-0 bg-black/90 flex items-center justify-center z-50' : ''}>

                <div className=" relative">
                    {isModal &&
                        <button onClick={onClose} className="absolute top-35 right-6 text-white text-xl cursor-pointer">
                            ✕
                        </button>}



                    <div className="w-110 h-175 border-8 border-(--primary-color) mx-auto my-30 rounded-4xl bg-(--bg-color) register-card">

                        <img src="\1x\logo3.png" alt="" width="200" className="mx-auto my-10 rounded-3xl" />

                        <div className=" text-(--secondary-color) text-4xl max-w-75 mx-auto text-center font-extrabold ">
                            <p className=" font-medium">Get Started</p>
                            <p className=" font-extralight">with</p>
                            <span className="text-(--primary-color)">Date</span>
                            <span>Me</span>
                        </div>

                        <form action="" method="post" className="flex flex-col w-max items-center mx-auto mt-7">
                            <input type="text" placeholder="Enter your username" className="border-2 rounded-xl text-(--secondary-color) pt-3 pb-3 px-10 " />
                            <input type="password" placeholder="Enter your password" className="border-2 rounded-xl text-(--secondary-color) pt-3 pb-3 px-10 mt-5" />
                            <button className="my-10 bg-(--primary-color) text-(--secondary-color) py-3 px-10 rounded-2xl cursor-pointer ">Register</button>
                        </form>

                    </div>




                </div>

            </div>
        </>

    )
}


export default Register;
