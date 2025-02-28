
let Box =(props)=>{
    return(
        <div className="box">

            <img src={props.imageSrc} alt="imgg" />

            <h2> Product Name: {props.productName}</h2>
            <h3> Price is : {props.price}</h3>

        </div>
    )
}

export default Box