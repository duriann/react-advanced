import React, {Component} from 'react'

class ListOfWords extends React.PureComponent {
  
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

export default class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这部分代码很糟，而且还有 bug
    // const words = this.state.words;
    // words.push('marklar');
    // this.setState({words: words});

    // this.setState({
    //   words: [...this.state.words, 'marklar']
    // });
    // {({words}) => {
    //   console.log(123,words);
    // }}
    this.setState(({words})=>({words:[...words,'aaa']}))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}