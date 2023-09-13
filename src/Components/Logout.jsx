import { useNavigate } from "react-router-dom"

export default function Logout() {
    const MovePage = useNavigate()

    const signout = () => {
        localStorage.clear()
        MovePage('/login')
    }
    return (
        <div className="flex justify-end mt-16">
            <button onClick={() => signout()} className="text-white hover:bg-black px-8 py-2 rounded-full text-xl">
                <i className='bx bx-log-out-circle'></i> Logout </button>
        </div>
    )
}
