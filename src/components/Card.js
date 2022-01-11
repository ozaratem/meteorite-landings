import React from "react";

const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Set", "Oct", "Nov", "Dec"];

function Card(props) {
    const date = new Date(props.data.year);
    const dateYear = date.getFullYear();
    const dateMonth = monthsNames[date.getMonth()];
    return <div className="Card">
        <div className="card-body">
            <h4 className="card-title">
                {props.data.name}
            </h4>
            <p className="card-recclass">
                {props.data.recclass}
            </p>
            <p className="card-mass">
                {props.data.mass} grams
            </p>
            <div className="card-floor">
                <p className="card-fall">{props.data.fall}</p>
                <p className="card-year">{dateMonth}, {dateYear}</p>
            </div>
        </div>
    </div>
}

export default Card;