import classes from './Service.module.css'


const ServiceCard: React.FC<{ image: string; header: string; text: string }> = (props) => {
    return (<div className =  {classes.block}>
        <div className= {classes.innerBlock}>
      <div className= {classes.pictureContainer}>   <img src = { props.image }></img> </div>
        <p className= {classes.headerStyle}> {props.header} </p>
        <p className= {classes.textStyle}>{props.text}</p>
        </div>          

    </div>)
}

export default ServiceCard;