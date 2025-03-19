
import { useCustom } from '../context/UserContext'

const User1 = () => {

    let {sim} =  useCustom()
  return (
    <div>

        <h1> I am user1</h1>
        <h2> my sim name is : {sim}</h2>
    </div>


  )
}

export default User1