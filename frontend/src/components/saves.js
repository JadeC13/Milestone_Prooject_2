import React from "react"

export default function saves({ Leaderboard }) {
    return (
        <div id="saves">
            {item(Leaderboard)}
        </div>
    )
};


function item(data) {
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item left">
                            <div className="info">
                                <h3 className="name text-dark">{index + 1}. {value.name}</h3>
                            </div>
                        </div>
                        <div className="item right">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    // The code above shows the names and scores in the leaderboard and shows their placement in the leaderboard too
                )
                )
            }
        </>

    )
}