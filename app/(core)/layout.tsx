import { Children } from "react";


export default async function CoreGroupLayout({children}: {children: React.ReactNode}) {
    return (
        <>
    <Navbar/>
    <div>
        <LeftSidebar/>
        <div>{children} </div>
    </div>
     </>
    )
    
}