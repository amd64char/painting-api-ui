import * as React from "react";
import * as moment from "moment";
import { Header } from "./header";
import { Main } from "./main";

export interface AppProps { 
  compiler: string; 
  framework: string;
}

export class App extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
    
  }

  render() {
    console.log(moment.version, 'moment version');

    return (
      <>
        <Header />
        <Main compiler={this.props.compiler} framework={this.props.framework} />
        <footer className="container">
            <p>&copy; Company {moment().format('LL')}</p>
        </footer>
      </>
    );
  }
}