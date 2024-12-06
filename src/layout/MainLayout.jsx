import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className="container mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;