import Footer from "../component/footer"
import Header from "../component/header"

function outlet() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <h1 className="text-6xl font-bold text-gray-900">MEBLE WYPZEDAZ</h1>
            </div>
            <Footer />
        </>
    )
}

export default outlet