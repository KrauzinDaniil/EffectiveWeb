
import classes from "./ArticleCard.module.css"

const ArticleCard: React.FC<{ image: string; header: string; text: string; }> = (props) => {

      return (<div className={classes.wrapper} >
            <div > <img src={props.image} alt="" className={classes.photo} /></div>
            <div className={classes.paddingWrapper}>
                  <div className={classes.title}> {props.header}</div>
                  <div className={classes.description}>{props.text}</div>
                  <div className={classes.readMore}> Read more  <div className={classes.arrow}></div></div>
            </div>

      </div>)
}

export default ArticleCard;