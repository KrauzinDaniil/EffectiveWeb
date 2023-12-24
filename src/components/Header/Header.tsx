
import classes from './Header.module.css'
import NavPanel from './NavPanel'

const Header: React.FC = () => {

    return (<header>

        <div className={classes.wrapper}>

            <NavPanel />
            <span><img src="src/assets/backgroundpics/element.svg" /></span>
            <div className={classes.underHat}>
                <div className={classes.Virtual}> <h1> Virtual Healthcare <br /> for you</h1>


                    <div className={classes.serviceText}> <text>Our service provides progressive, and<br /> affordable healthcare, accessible on mobile<br /> and online for everyone</text></div>

                    <div className={classes.headerButton}>Consult today</div>

                </div>

                <div><img src="src/assets/pagepics/header-image.png" /></div>

            </div>
        </div>
    </header>)
};



export default Header;