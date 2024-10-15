import Image from "next/image"
import  Picture from "../public/malaria.jpeg"
export default function Malaria(){
   return(
    <div className="parent-contain">
    <div className="child-contain">
        <div className="img">
        <Image src={Picture} alt="Photo" / >
           </div>
            <h1 className="heading">
                MALARIA
            </h1>
            <p className="descrip">
            Malaria is a disease caused by Plasmodium parasites, transmitted to humans through bites of infected Anopheles mosquitoes. It causes symptoms like fever, chills, and fatigue. Plasmodium falciparum is the most severe species. Malaria is prevalent in tropical regions and can be treated with antimalarial drugs and prevented through mosquito control
            </p>
            <h1 className="sec-heading"><b>Symptoms of Malaria:</b>
            </h1>
            <p>Fever,Chills,Headache,Muscle pain,Fatigue</p>
                <h1 className="sec-heading"><b>Treament:</b></h1>
            <p> Artemisinin-based combination therapies (ACTs),Chloroquine (for non-resistant strains),Primaquine (for preventing relapse),Intravenous artesunate (for severe cases),Supportive care (fluids, oxygen, blood transfusions.....................</p>
        
    </div>
    </div>
   ) 
}