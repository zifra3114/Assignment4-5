import Link from "next/link"
import Logo from "../public/logo.png"
import Image  from "next/image"  
 

export default function Header(){
    return (
        <div className="header">
        <div className="logo">
            <Image src={Logo} alt="logo"  />
        </div>

        <ul className="header-button">
        <Link href={"/"}>
            <li>HOME</li></Link>
            <Link href={"/about"}>
            <li>ABOUT</li></Link>
            <Link href={"/contact"}>
            <li>CONTACT</li></Link>
        </ul>
        <hr />
    </div> 

    )
}