import React, {useState} from "react";

export  default {
    title: 'React.Memo demo'
}


export const NewMessageCounter1 = (props: {count: number}) => {
    return <div>{props.count}</div>
}


export const UsersS = (props: { users: string[] }) => {

    return (
        <div>
            {
                props.users.map( (u, i) => <div key={i}>{u}</div>)
            }
        </div>
    )
}

const Users = React.memo(UsersS)
const NewMessageCounter = React.memo(NewMessageCounter1)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Andrei', 'Dima', 'Alex', 'Bob'])
return (
    <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
)

}


