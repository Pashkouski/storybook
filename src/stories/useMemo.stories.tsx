import React, {useMemo, useState} from "react";


export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resA = 1;
    let resB = 1;

    resA = useMemo(() => {
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResA *= i
        }
        return tempResA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resB *= i
    }

    return (
        <>
            <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Res a: {resA}
            </div>
            <div>
                Res b: {resB}
            </div>
        </>
    )
}


export const UsersS = (props: { users: string[] }) => {

    return (
        <div>
            {
                props.users?.map((u, i) => <div key={i}>{u}</div>)
            }
        </div>
    )
}

const Users = React.memo(UsersS)

export const HelpsToReactMemoExample = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Andrei', 'Dima', 'Alex', 'Bob'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUsers = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={addUsers}>add users</button>
            </div>
            {counter}
            <Users users={newArray}/>

        </>
    )
}