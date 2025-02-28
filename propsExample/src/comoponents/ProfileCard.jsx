
let ProfileCard =(props)=>{

      console.log(props)
    
    //   props.productName = "tab"  ❌
    
    return(

        <div className="card">
            <h1> profile card</h1>

            <h2> product name is : {props.productName}</h2>
            <h3> price is : {props.price}</h3>
        </div>
    )
}

export default ProfileCard