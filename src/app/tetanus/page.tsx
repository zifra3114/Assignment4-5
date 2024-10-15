import Image from "next/image"
import  Picture from "../public/images (5).jpg"
export default function Tetanus(){
   return(
    <div className="parent-contain">
    <div className="child-contain">
        <div className="img">
        <Image src={Picture} alt="Photo"  height={500}/ >
           </div>
            <h1 className="heading">
            TETANUS
            </h1>
            <p className="descrip">
           
             Tetanus is a serious bacterial infection caused by the bacterium Clostridium tetani. This bacterium produces a potent toxin that affects the nervous system, leading to muscle stiffness and spasms. Tetanus is often associated with deep puncture wounds or cuts, especially those contaminated with dirt or animal feces, where the bacteria can thrive in low-oxygen environments. 

            </p>
            <h1 className="sec-heading"><b>Symptoms of Tetanus:</b>
            </h1>
            <p>Muscle stiffness (often starting in the jaw, causing &quot;lockjaw),Spasms or contractions of muscles (particularly in the abdomen),Difficulty swallowing,Rigidity in the neck and back,Fever and sweating</p>
                <h1 className="sec-heading"><b>Treament:</b></h1>
            <p>Wound care: Clean and debride the wound to prevent further infection,
Tetanus immune globulin (TIG): Administered to neutralize the toxin,
Antibiotics: To treat the bacterial infection (e.g., metronidazole or penicillin),
Muscle relaxants: To alleviate muscle spasms and stiffness,
Supportive care: Including monitoring and managing complications, such as respiratory support if needed.....................</p>
        
    </div>
    </div>
   ) 
}