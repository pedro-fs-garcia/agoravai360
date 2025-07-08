import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ConfirmSubmissionPage from "@/pages/ConfirmSubmissionPage";

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/confirmado" element={<ConfirmSubmissionPage />} />
        </Routes>
    )
}