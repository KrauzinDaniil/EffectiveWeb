import classes from "./Footer.module.css"


const Footer: React.FC = () => {


    return (<footer className={classes.asd}>
        <div className={classes.wrapper}>
            <div className={classes.brightGradient}> <img src="/src/assets/backgroundpics/brightGradient.svg" alt="" /></div>
            <div className={classes.decorElem}> <img src="/src/assets/backgroundpics/elementTwo.svg" alt="" /></div>
            <div className={classes.siteInfo}>
                <div className={classes.logoSign}>
                    <div className={classes.logo}> <div>T</div> </div>
                    <div className={classes.healthCare}> <h2>Health Care</h2></div>
                </div>
                <div className={classes.description}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                <div className={classes.siteRights}>©HealthCare PTY LTD 2023. All rights reserved</div>
            </div>
            <div className={classes.innerWrapper}>
                <div className={classes.list}>
                    <ul>
                        <li><a> <h3>Company</h3></a> </li>
                        <li> <a>About</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>Find a doctor</a></li>
                        <li><a>Apps</a></li>
                    </ul>

                </div>

                <div className={classes.list}>
                    <ul>
                        <li> <a> <h3>Region</h3></a> </li>
                        <li><a>Indonesia</a></li>
                        <li><a>Singapore</a></li>
                        <li><a>Hongkong</a></li>
                        <li><a>Canada</a></li>
                    </ul>

                </div>

                <div className={classes.list}>
                    <ul>
                        <li> <a> <h3>Help</h3></a> </li>
                        <li><a>Help center</a></li>
                        <li><a>Contact support</a></li>
                        <li><a>Instructions</a></li>
                        <li><a>How it works</a></li>
                    </ul>

                </div>

            </div>


        </div>

    </footer>)
}
export default Footer;