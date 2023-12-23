import { useState } from 'react';
import classes from './Article.module.css'
import ArticleCard from './ArticleCard';
 

const Article: React.FC = () => {
    const [showAdditionalCards, setShowAdditionalCards] = useState(false);

    const handleButtonClick = () => {
        setShowAdditionalCards(!showAdditionalCards);
      
      };
 
    return (<article>
         <div className={classes.vector}> <img src="src/assets/Vector.png" /></div>
        <div className={classes.decorElem}><img src="src/assets/elementTwo.svg"/></div> 
        <h2 className={classes.sign}>Check out out latest article</h2>
        <div className={classes.divider}></div>
        <div className={classes.wrapper}>
            <ArticleCard image="/src/assets/hand.png" header='Disease detection, check 
up in the laboratory' text='In this case, the role of the health laboratory is very important to do
a disease detection...' />
            <ArticleCard image="/src/assets/doctor.png" header='Herbal medicines that are 
safe for consumption' text='Herbal medicine is very widely used at this time because of its very good for your health...' />
            <ArticleCard image="/src/assets/woman.png" header='Natural care for healthy 
facial skin' text='A healthy lifestyle should start from now and also for your skin health.
There are some...' />
            {showAdditionalCards && <ArticleCard image="/src/assets/hand.png" header='Disease detection, check 
up in the laboratory' text='In this case, the role of the health laboratory is very important to do
a disease detection...' />}
            {showAdditionalCards && <ArticleCard image="/src/assets/doctor.png" header='Herbal medicines that are 
safe for consumption' text='Herbal medicine is very widely used at this time because of its very good for your health...' />}
            {showAdditionalCards && <ArticleCard image="/src/assets/woman.png" header='Natural care for healthy 
facial skin' text='A healthy lifestyle should start from now and also for your skin health.
There are some...'  />}
           
        </div>
        <button onClick={handleButtonClick} id="displayButton"><div>{!showAdditionalCards ? "View all" : "Hide" }</div></button> 
        
    </article>)
}


export default Article;

