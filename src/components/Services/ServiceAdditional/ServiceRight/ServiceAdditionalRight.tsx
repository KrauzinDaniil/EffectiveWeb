import classes from './ServiceAdditional.module.css'


const ServiceAdditionalRight: React.FC = () => {
    return (<div className={classes.wrapper}>
        <div className={classes.leftTextWrapper}><h2>Download our
            <br /> mobile apps</h2>
            <div className={classes.divider}></div>
            <br />
            <div className={classes.additionalInfo}><p>Our dedicated patient engagement app and <br /> web portal allow you to access information <br /> instantaneously {"("} no tedeous form, long calls, <br />
            or administrative hassle {")"} and securely</p></div>
            <button><div>Download </div> <div className={classes.svgSelect}/></button>
        </div>
        <div> <img src="src/assets/pictureTwo.png" /></div>


    </div>)
}
export default ServiceAdditionalRight;