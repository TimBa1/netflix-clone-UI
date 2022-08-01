import "./List.scss"
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import Listitem from "../Listitem/Listitem"
import { useRef, useState } from "react"

function List() {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    
    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x-50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber -1)
            listRef.current.style.transform= `translateX(${230 + distance}px)` 
        }
        if (direction === "right" && slideNumber <4) {
            setSlideNumber(slideNumber + 1)
            
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            console.log(distance)
        }
    }
   

    return (
        <div className="list">
            <span className="listTittle">continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className="slideArrow left" onClick={() => handleClick("left")}
                    style={{display: !isMoved&&"none "}}/>
                <div className="container" ref={listRef}>
                    <Listitem  index={0}/>
                    <Listitem index={1} />
                    <Listitem index={2}/>
                    <Listitem index={3}/>
                    <Listitem index={4}/>
                    <Listitem index={5}/>
                    <Listitem index={6}/>
                    <Listitem index={7}/>
                    <Listitem index={8}/>
                    <Listitem index={9} />
                    
                    

                </div>
                <ArrowForwardIosOutlined className="slideArrow right" onClick={()=>handleClick("right") }/>
                
            </div>
        </div>
    )
}

export default List
