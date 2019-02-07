import * as React from "react";
import { Painting } from "./model";
import * as moment from "moment";

interface CardProps {
    painting: Painting;
    paintingId: string;
}

export class PaintingCard extends React.Component<CardProps, Painting> {
    constructor(props: CardProps) {
        super(props);

    }
    
    componentDidMount() {
        
    }

    render() {
        
        const { painting, paintingId } = this.props;
        const displayDate = !!painting.dateModified ? moment(painting.dateModified).format('lll') : moment(painting.dateCreated).format('lll');

        return(
            <>
                <div key={paintingId} className="card mb-3">
                    <img src={painting.url} className="card-img-top img-thumb" alt={painting.name} />
                    <div className="card-body">
                        <h5 className="card-title">{painting.name}</h5>
                        <p className="card-text">{painting.artist}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    {
                        painting.techniques.map((item, index) => {
                            return (
                                <li key={index} className="list-group-item">{item}</li>
                            );
                        })
                    }
                    </ul>
                    <div className="card-body">
                        <a href={painting.url} target="_blank" className="card-link">More Info</a>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated: {displayDate}</small>
                    </div>
                </div>
            </>
        );
    }

}