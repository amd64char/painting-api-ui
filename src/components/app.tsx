import * as React from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

export interface AppProps { 
  compiler: string; 
  framework: string;
  currentDate: string;
  apiBaseUrl: string;
}

export class App extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
    
  }

  render() {

    return (
      <>
        <Header />
        <Main compiler={this.props.compiler} framework={this.props.framework} ApiBaseUrl={this.props.apiBaseUrl} />
        <Footer currentDate={this.props.currentDate} />
      </>
    );
  }
}