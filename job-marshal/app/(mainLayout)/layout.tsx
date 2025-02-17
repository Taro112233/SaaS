import { Navbar } from "@/components/general/Navbar";
import { ReactNode } from "react";

export default function MainLayout({children} : {children: ReactNode}) {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
        </div>
    );
}