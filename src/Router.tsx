import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { LoginForm } from "./pages/Auth/Login";
import { RegisterForm } from "./pages/Auth/Register";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}