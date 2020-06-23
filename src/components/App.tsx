import * as React from "react";

export class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <h1>React Redux</h1>
      </div>
    );
  }
}
