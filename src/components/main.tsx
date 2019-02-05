import * as React from "react";
import axios, { AxiosPromise, AxiosError } from 'axios';
import { PaintingCard } from "./paintings/card";
import { PaintingAdd } from "./paintings/add";
import { Painting } from "./paintings/model";
import 'bootstrap';
import bootbox from 'bootbox';

interface MainProps {
    compiler: string; 
    framework: string;
    ApiBaseUrl: string;
}

interface MainData {
    paintings: Painting[];
    paintingCount: number;
    error: string;
}

export class Main extends React.Component<MainProps, MainData> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            paintings: [],
            paintingCount: 0,
            error: ''
        };

        axios.defaults.baseURL = this.props.ApiBaseUrl;
    }

    displayError = (error: string) => {
        //bootbox.alert(`<p>There was an error while getting data:</p><p><i>${error}</i></p>`);
        alert(`There was an error while getting data.\n${error}`);
    }

    getAllPaintingsCount = async () => {
        try {
            const res = await axios.get<number>('/paintings/all');
            const data: number  = await res.data;
            this.setState({ paintingCount: data });
        } catch(e) {
            throw new Error(e.message);
        }
    }

    getAllPaintings = async () => {
        try {
            const res = await axios.get<Painting[]>('/paintings');
            const data: Painting[] = await res.data;
            this.setState({ paintings: data });
        } catch(e) {
            throw new Error(e.message);
        }
    }

    async componentDidMount(): Promise<void> {
      try {
          await this.getAllPaintingsCount();
      } catch(e) {
          this.displayError(e.message);
      }
      try {
          await this.getAllPaintings();
      } catch(e) {
          this.displayError(e.message);
      }
        
    }

    render() {
        const { paintings, paintingCount } = this.state;
        console.log(paintings, 'paintings');
        //console.log(paintingCount, 'painting count');

        return(
          <>
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                      <h5>Currently there are (<strong>{paintingCount}</strong>) paintings available!</h5>
                    </div>
                </div>
                <div className="container">
                    <div className="accordion" id="accordionExample">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Add New Painting
                        </button>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <PaintingAdd />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card-deck">
                      {
                        paintings && paintings.map((painting, index) => {
                            // Render 2 cards at a time - the current and previous items
                            return (
                                <PaintingCard key={index} paintingId={painting.id} painting={painting} />
                            );
                        })
                      }
                    </div>
                    <hr/>
                </div>
            </main>
          </>
        ); 
      }
}