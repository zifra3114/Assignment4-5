import Image from "next/image"
import  Picture from "../public/picture.jpg"
export default function Covid(){
   return(
    <div className="parent-contain">
    <div className="child-contain">
        <div className="img">
        <Image src={Picture} alt="Photo" / >
           </div>
            <h1 className="heading">
                COVID-19
            </h1>
            <p className="descrip">
            COVID-19 is caused by the SARS-CoV-2 virus (Severe Acute Respiratory Syndrome Coronavirus 2), which primarily affects the respiratory system. It emerged in December 2019 and led to a global pandemic. The virus spreads mainly through respiratory droplets, though it can also spread through contact with contaminated surfaces.
            </p>
            <h1 className="sec-heading"><b>Symptoms of COVID-19:</b>
            </h1>
            <p> Fever, cough, shortness of breath, fatigue, loss of taste/smell, body aches, sore throat</p>
                <h1 className="sec-heading"><b>Treament:</b></h1>
            <p> Rest, hydration, antivirals, oxygen therapy, vaccines.....................</p>
        
    </div>
    </div>
   ) 
}