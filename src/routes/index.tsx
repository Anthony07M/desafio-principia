import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Home } from "../pages/home";


export const RoutesProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

