import Link from "next/link"
export default function Home(){
  return(
    <div className="parent-container">
    <div className="child-container">
        <div className="image-container">
        
           </div>
            <h1 className="tittle">
                COVID-19
            </h1>
            <p className="description">
            COVID-19 is a contagious disease caused by the SARS-CoV-2 virus, leading to symptoms from mild fever to severe respiratory issues. It spreads through respiratory droplets, with prevention methods including masks, distancing, and    vaccination.
            </p>
            <Link href={"/covid-19"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="image-containers">
        
           </div>
            <h1 className="tittle">
                MALARIA
            </h1>
            <p className="description">
                             
Malaria is a life-threatening disease caused by parasites transmitted through infected Anopheles mosquito bites, causing symptoms like fever and chills. Prevention includes bed nets and antimalarial medications for treatment. 

            </p>
            <Link href={"/malaria"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="image">
        
           </div>
            <h1 className="tittle">
                PARKINSON&apos;s DISEASE
            </h1>
            <p className="description">
            Parkinson&apos;s disease is a neurodegenerative disorder causing tremors, rigidity, and bradykinesia, leading to impaired movement and balance issues.
            </p>
            <Link href={"/parkinson"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="Picture">
        
           </div>
            <h1 className="tittle">
            INFLUENZA (Flu)
            </h1>
            <p className="description">
            Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. Symptoms include fever, cough, sore throat, body aches, fatigue, and can lead to serious complications
            </p>
            <Link href={"/flu"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="images-container">
        
           </div>
            <h1 className="tittle">
            HAEMOPHILUS
            </h1>
            <p className="description">
            Haemophilus refers to a genus of bacteria, including Haemophilus influenzae, which can cause respiratory infections, meningitis, and other serious diseases. Vaccination is available to prevent severe infections, especially in children
            </p>
            <Link href={"/hemophilus"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="img-container">
        
           </div>
            <h1 className="tittle">
            TETANUS
            </h1>
            <p className="description">
            Tetanus is a severe bacterial infection caused by Clostridium tetani. It leads to painful muscle stiffness and spasms, particularly in the jaw and neck. Vaccination is crucial for prevention.
            </p>
            <Link href={"/tetanus"}>
            <button className="button">Read More</button></Link>
    </div>
    </div>
    
  )
}