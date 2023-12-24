import classes from './ServiceAdditional.module.css'


const ServiceAdditionalLeft: React.FC = () => {
    return (<div className={classes.wrapper}>
        <div> <img src="src/assets/pagepics/pictureOne.png" /></div>
        <div className={classes.leftTextWrapper}><h2>Leading healhcare <br /> providers</h2>
            <div className={classes.divider}></div>
            <br />
            <div className={classes.additionalInfo}><p>We provides progressive, and affordable healthcare,<br /> accessible on mobile and online for everyone. To us, it’s <br /> not just work. We take pride in the solutions we deliver</p></div>
            <button><div>Learn more</div></button>
        </div>



    </div>)
}
export default ServiceAdditionalLeft;