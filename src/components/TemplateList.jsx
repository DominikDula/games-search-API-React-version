import React from 'react'

import { Link} from "react-router-dom";

import './TemplateList.scss'

function DeveloperList(props) {
    const {item} = props
    return (
        <div className="item-info" style={{backgroundImage: "url(" + item.image_background + ")"}}  >    
            <div className="item-name">                
                <h1>{item.name}</h1>
            </div>

        <div className="item-desc">
            <h3>Popular games:</h3>             
            <ul>
                {item.games.slice(0, 3).map(game => ( 
                <li key={game.id}>
                    <Link to={"games/" + game.slug} key={game.slug}>{game.slug}</Link>
                </li> ))}
            </ul>
        </div>
    </div>
    )
}

export default DeveloperList