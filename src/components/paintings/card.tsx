import * as React from "react";
import { Painting } from "./model";

interface CardProps {
    painting: Painting; 
}

interface CardData {
    paintingId: string;
}


export class PaintingCard extends React.Component<CardProps, CardData> {
    constructor(props: CardProps) {
        super(props);

        
    }

    componentDidMount() {
        
    }

    render() {
        
        const { painting } = this.props;

        return(
            <>
                <div className="col-auto">
                    <div className="card">
                        <img src={painting.url} className="card-img-top" alt={painting.name} />
                        <div className="card-body">
                            <h5 className="card-title">{painting.name}</h5>
                            <p className="card-text">{painting.artist}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                        {
                            painting.techniques.map(item => {
                                return (
                                    <li className="list-group-item">{item}</li>
                                );
                            })
                        }
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}