import React from 'react'

const About = ( props) => {

    let {myTeam , playersCount} = props;

    let players = ["rohit","gill","kohli","iyer","rahul","axar","shami","pandya","varun","jaddu","kullu"]
  return (
    <>
    <h1> I am about component</h1>

    {/* <h2> my team name : {props.myTeam.toUpperCase()} </h2>
    <h3> total players : {props.playersCount}</h3> */}

    <h2> my team : {myTeam.toUpperCase()}</h2>
    <h3> players : {playersCount}</h3>

    <ol>
        {
            players.map((ele,index)=>{
                return(
                    <li key={index}> {ele} </li>
                )
            })
        }
    </ol>

    <hr />
    </>
  )
}

export default About