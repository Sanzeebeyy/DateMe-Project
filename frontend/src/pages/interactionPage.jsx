import Nav from "../components/mainPageComponents/Nav.jsx";
import api from '../api/axios.js'

function Interactions() {







    return (
        <>
            <Nav></Nav>

            <div className="mx-auto mt-16 w-104 rounded-3xl border-6 border-(--primary-color) bg-(--bg-color) shadow-2xl overflow-hidden">


                <div className="relative h-136 overflow-hidden">
                    <img
                        src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="parrot"
                        className="h-full w-full object-cover"
                    />


                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>


                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="text-3xl font-bold">Scarlet 🦜</p>
                        <p className="text-base opacity-90">
                            Loves flying, mangoes & sunsets
                        </p>

                        <div className="mt-3 flex gap-5 text-base opacity-90">
                            <span>Age: 3</span>
                            <span>Gender: Male</span>
                        </div>
                    </div>
                </div>


                <div className="flex justify-around py-6">
                    <button
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-white text-2xl shadow-xl transition hover:scale-110 hover:bg-red-600"
                    >
                        ✕
                    </button>

                    <button
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white text-2xl shadow-xl transition hover:scale-110 hover:bg-green-600"
                    >
                        <img src="navIcons\favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Interactions