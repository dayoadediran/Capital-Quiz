import React , {Component} from 'react';
import ReactDOM from 'react-dom';



class ScoreBox extends Component{

  render(){
    return(
      <div className="well">
        Question {this.props.current} out of {this.props.questions.length}<span className="pull-right"><strong>Score: </strong>{this.props.score}</span>
      </div>
    )
  }
}
export default ScoreBox
