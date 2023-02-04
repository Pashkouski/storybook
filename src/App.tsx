import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOffButton} from "./components/OnOff/OnOff";

export type itemsType = {
    title: string
    id: number
}


function App() {
    const [OnOff, setOnOff] = useState(false)
    const [collapsed, setCollapsed] = useState(true)

    const items : itemsType[] = [
        {title: "dsaas3d", id: 1},
        {title: "ds321sd", id: 2},
        {title: "dsa321d", id: 3},
        {title: "ds213sd", id: 4},
        {title: "dsa12sd", id: 5},
    ]

    return (
        <div>
            <input/>
            <input checked={true} value='test' type="password"/>

            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>

            <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}
                       items={items} color={'blue'}/>


            <Rating />

            <OnOffButton
                OnOff={OnOff}
                setOnOff={setOnOff}
            />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {

    return (
        <h1>{props.title}</h1>
    )
}


export default App;