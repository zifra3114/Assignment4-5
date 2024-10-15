import Image from "next/image"
import  Picture from "../public/images .jpg"
export default function Malaria(){
   return(
    <div className="parent-contain">
    <div className="child-contain">
        <div className="img">
        <Image src={Picture} alt="Photo" height={600} / >
           </div>
            <h1 className="heading">
                
            INFLUENZA (Flu)
            </h1>
            <p className="descrip">
            Influenza (flu) is a contagious viral infection that affects the respiratory system, including the nose, throat, and lungs. It causes symptoms such as fever, chills, cough, sore throat, body aches, and fatigue. The flu spreads through respiratory droplets, and vaccination is the primary method of prevention.

            </p>
            <h1 className="sec-heading"><b>Symptoms of  Influenza (Flu):</b>
            </h1>
            <p>Fever and chills,Cough,Sore throat,Body aches and muscle pain,Fatigue</p>
                <h1 className="sec-heading"><b>Treament:</b></h1>
            <p>Rest and hydration,Over-the-counter medications (for fever and pain, like ibuprofen or acetaminophen),Antiviral drugs (e.g., oseltamivir, if taken early),Cough suppressants for relief,Flu vaccine for prevention.....................</p>
        
    </div>
    </div>
   ) 
}