import * as React from "react";
import axios, { AxiosPromise, AxiosError } from 'axios';
import { PaintingCard } from "./paintings/card";
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

      await this.getAllPaintingsCount();
      await this.getAllPaintings();        
        
    }

    render() {
        console.log(this.props.ApiBaseUrl, 'this.props.ApiBaseUrl');
        const { paintings, paintingCount } = this.state;

        console.log(paintings, 'paintings');
        console.log(paintingCount, 'painting count');
        //bootbox.alert(`<p>There was an error while getting data.</p><i></i>`);

        return(
          <>
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                          paintings && paintings.map(painting => {
                            return (
                                <PaintingCard painting={painting} />
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