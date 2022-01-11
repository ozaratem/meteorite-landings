import React from "react";

function Card() {
    return <div className="Card">
        <div className="card-body">
            <h4 className="card-title">
                Meteorite Name
            </h4>
            <p className="card-recclass">
                Ureilite-pmict class
            </p>
            <p className="card-mass">
                60.34 grams
            </p>
            <div className="card-floor">
                <p className="card-fall">Fell</p>
                <p className="card-year">Dec, 2021</p>
            </div>
        </div>
    </div>
}

export default Card;