import React from 'react'
import Card from './Card'

const Props = () => {
  return (
    <div className='Props'>
        <h1> props component</h1>

        <div className="propsContainer">

            
            <Card productName = {"laptop"} productPrice= {50000}  image={"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <Card  productName = {"mobile"} productPrice= {30000}  image={"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <Card  productName = {"tv"} productPrice= {60000}  image={"https://images.pexels.com/photos/3151392/pexels-photo-3151392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <Card  productName = {"camera"} productPrice= {20000}  image={"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <Card  productName = {"shirt"} productPrice= {2000}  image={"https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <Card  productName = {"pant"} productPrice= {2500}  image={"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <Card  productName = {"shoe"} productPrice= {1500}  image={"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            
        </div>
    </div>
  )
}

export default Props