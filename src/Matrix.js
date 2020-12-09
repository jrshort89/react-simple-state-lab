import React,{ Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map((val,index) => <Cell value={val} key={index} />) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    return this.props.values.map((rowVals,index) => <div className="row" key={index}>{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: [
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F'],
    ['#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F','#F00','#00F']
  ]
}
