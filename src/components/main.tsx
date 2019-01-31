import * as React from "react";
import 'bootstrap';
import axios from 'axios';
import bootbox from 'bootbox';

interface MainProps {
  compiler: string; 
  framework: string;
  ApiBaseUrl: string;
}

interface MainData {
  paintings: string[];
  paintingCount: number;
}

export class Main extends React.Component<MainProps, MainData> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      paintings: [],
      paintingCount: 0
    };
  }

  async getAll() {
      const res = await axios(this.props.ApiBaseUrl + '/data');
      return res;
  }

  componentDidMount() {

  }

  render() {
    
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
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>
                <hr/>
            </div>
        </main>
      </>
    ); 
  }
}