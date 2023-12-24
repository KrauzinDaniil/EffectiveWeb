import classes from './NavPanel.module.css'

const NavPanel: React.FC = () => {
    return (<div>

        <div className={classes.siteHat}>
            <div className={classes.photoAndLabel}>
                <div className={classes.circle}><text> T</text> </div>
                <div className={classes.pageName}><h2>HealthCare</h2></div>
            </div>
            <nav>
                <ul className={classes.navUl}>
                    <li className={classes.chosen}>  <a>Home</a> </li>
                    <li>  <a>Find a doctor</a></li>
                    <li>  <a>Apps</a></li>
                    <li>  <a>Testimonials</a></li>
                    <li>  <a>About us</a></li>

                </ul>
            </nav>
        </div>

    </div>)
}
export default NavPanel;