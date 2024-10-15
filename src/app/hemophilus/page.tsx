import Image from "next/image"
import  Picture from "../public/photo.jpg"
export default function Haemophilus(){
   return(
    <div className="parent-contain">
    <div className="child-contain">
        <div className="img">
        <Image src={Picture} alt="Photo" height={700}/ >
           </div>
            <h1 className="heading">
            HAEMOPHILUS
            </h1>
            <p className="descrip">
            Haemophilus is a genus of bacteria that includes several species, some of which can cause infections in humans. The most notable species is Haemophilus influenzae, which can lead to respiratory infections, meningitis, and other serious illnesses, particularly in children and individuals with weakened immune systems

            </p>
            <h1 className="sec-heading"><b>Symptoms of Haemophilus:</b>
            </h1>
            <p>Fever and chills,Cough (often with respiratory infections),Sore throat,Shortness of breath,Meningitis symptoms (such as headache, stiff neck, and confusion in severe cases</p>
                <h1 className="sec-heading"><b>Treament:</b></h1>
            <p>Antibiotics (e.g., amoxicillin, ceftriaxone) for bacterial infections, Supportive care (hydration and rest),Vaccination against Haemophilus influenzae type b (Hib) for prevention in children,Symptomatic treatment (e.g., pain relievers for fever and discomfort).....................</p>
        
    </div>
    </div>
   ) 
}