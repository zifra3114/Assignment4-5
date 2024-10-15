import Image from "next/image"
import  Picture from "../public/brain.jpg"
export default function Parkinson(){
   return(
    <div className="parent-contain">
    <div className="child-contain">
        <div className="img">
        <Image src={Picture} alt="Photo" / >
           </div>
            <h1 className="heading">
                
           PARKINSON&apos;s DISEASE 
            </h1>
            <p className="descrip">
            Parkinson&apos;s disease is a chronic, progressive neurological disorder caused by the degeneration of dopamine-producing neurons in the brain. It affects movement and causes symptoms like tremors, muscle rigidity, slow movements (bradykinesia), and balance problems. Though the exact cause is unknown, treatments focus on managing symptoms through medications, physical therapy, and, in advanced cases, surgical options

            </p>
            <h1 className="sec-heading"><b>Symptoms of  Parkinson&apos;s Disease:</b>
            </h1>
            <p>Tremors (shaking, often starting in the hands),Muscle stiffness (rigidity),Bradykinesia (slowness of movement),Impaired balance and coordination,Speech and writing difficulties</p>
                <h1 className="sec-heading"><b>Treament:</b></h1>
            <p>Levodopa (increases dopamine levels),Dopamine agonists (mimic dopamine effects),MAO-B inhibitors (prevent dopamine breakdown),Physical therapy (improves mobility and balance),Deep brain stimulation (for advanced cases).....................</p>
        
    </div>
    </div>
   ) 
}