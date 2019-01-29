import * as React from "react";

export interface FooterProps {
  currentDate: string;
}

export class Footer extends React.Component<FooterProps, {}> {
  constructor(props: FooterProps) {
    super(props);
  }

  render() {
    
    return (
      <>
        <footer className="container">
          <p>&copy; Company {this.props.currentDate}</p>
        </footer>
      </>
    );
  }
}