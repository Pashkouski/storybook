import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {

    const [value, setValue] =  useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>(setValue(e.currentTarget.value))

    return (
       <> <input onChange={onChangeHandler }/> - {value} </>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] =  useState('')

    const inputRef = useRef<HTMLInputElement>(null);

    const save =()=> {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <> <input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value} </>
    )
}


export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] =  useState(true)


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>(setParentValue(e.currentTarget.checked))

    return (
        <input type={"checkbox"} checked={parentValue} onChange={action('call')}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] =  useState<string | undefined>('3')


    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=> {
        (setParentValue(e.currentTarget.value))
    }


    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option> none </option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
        </select>
    )
}