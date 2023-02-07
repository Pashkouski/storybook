import React, {useState, KeyboardEvent, useEffect} from 'react'
import s from './Select.module.css'

type SelectType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: string
    onChange: (value: any) => void
    item: SelectType[]
}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])


    const SelectItem = props.item.find(el => el.value === props.value)
    const hoveredItem = props.item.find(el => el.value === hoveredElement)


    const togleTems = () => setActive(!active)
    const onItemClick = (value: string) => {
        props.onChange(value)
        togleTems()
    }

    const oonKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

            for (let i = 0; i < props.item.length; i++) {
                if (hoveredElement === props.item[i].value) {
                    const UoDownElement = e.key === 'ArrowDown'
                        ? props.item[i + 1]
                        : props.item[i - 1]
                    if (UoDownElement) {
                        props.onChange(UoDownElement.value)
                        return
                    }
                }
                if (!SelectItem) {
                    props.onChange(props.item[0].value)
                }
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div style={{border: `1px solid`}} tabIndex={0} onKeyUp={oonKeyUpHandler}>
                <div style={{width: '50px', height: '50px'}}
                     onClick={togleTems}>{SelectItem && SelectItem.title}</div>
                {
                    active &&
                    <div>
                        {props.item.map(el => <div
                            onMouseEnter={() => setHoveredElement(el.value)}
                            className={(hoveredItem === el) ? s.item : s.itemDef}
                            key={el.value}
                            onClick={() => onItemClick(el.value)}
                        >{el.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}