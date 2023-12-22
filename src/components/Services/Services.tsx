import classes from "./Services.module.css"
import ServiceCard from "./ServiceCard";
import ServiceAdditionalLeft from "./ServiceAdditional/ServiceLeft/ServiceAdditionalLeft";
import ServiceAdditionalRight from "./ServiceAdditional/ServiceRight/ServiceAdditionalRight";


const Services: React.FC = () => {
    return (<main>
        <div className={classes.wrapper}>
            <h2>Our Services</h2>
            <div className={classes.divider}></div>
            <p className={classes.information}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment
                <br /> with our highly qualified doctors you can consult with us which type of service is suitable for your health
            </p>
            <div className={classes.vector}> <img src="src/assets/Vector.png" /></div>
            <div className={classes.dots}> <img src="src/assets/elementTwo.svg" /></div>
            <div className={classes.cardWrapper}>
                <ServiceCard image="src/assets/loop.svg" header="Search doctor" text="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
                <ServiceCard image="src/assets/pills.svg" header="Online pharmacy" text="Buy  your medicines with our mobile application with a simple delivery system" />
                <ServiceCard image="src/assets/blank.svg" header="Consultation" text="Free consultation with our trusted doctors and get the best recomendations" />
                <ServiceCard image="src/assets/notes.svg" header="Details info" text="Free consultation with our trusted doctors and get the best recomendations" />
                <ServiceCard image="src/assets/firstAid.svg" header="Emergency care" text="You can get 24/7 urgent care for yourself or your children and your
lovely family" />
                <ServiceCard image="src/assets/notes.svg" header="Tracking" text="Track and save your medical history and health data " />
            </div>
            <div className={classes.decorElem}><img src="src/assets/element.svg"/></div> 
            <button> <div> Learn more </div></button>
             <ServiceAdditionalLeft/>
            
             <ServiceAdditionalRight/>
        </div>

    </main>)
}
export default Services; 