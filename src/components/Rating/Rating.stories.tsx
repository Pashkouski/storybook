import React, {useState} from "react";


export function Rating() {

    const [star, setStar] = useState(0)

    const onClickHandler = (props: number) => () => setStar(props)


    return (
        <div>
            <span onClick={onClickHandler(1)}>
                <Star selected={star > 0}/>
            </span>
            <span onClick={onClickHandler(2)}>
                <Star selected={star > 1}/>
            </span>
            <span onClick={onClickHandler(3)}>
                <Star selected={star > 2}/>
            </span>
            <span onClick={onClickHandler(4)}>
                <Star selected={star > 3}/>
            </span>
            <span onClick={onClickHandler(5)}>
                <Star selected={star > 4}/>
            </span>
        </div>
    )

}

type StarPropsType = {
    selected: boolean;
}


function Star(props: StarPropsType) {
    return (
        props.selected
            ? (<span><b> star </b></span>)
            : (<span> star </span>)
    )
}