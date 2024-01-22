import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Main;