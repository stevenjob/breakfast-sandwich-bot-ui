import React from 'react';

class RandomTextViewer extends React.Component {

  getNewRandomText = () => {
    this.props.requestRandomText();
  }

  render() {
    return (
      <div className="random-text-viewer">
        <button onClick={this.getNewRandomText}>Get new random text</button>
        <p>{this.props.text}</p>
      </div>
   );
  }
}

RandomTextViewer.propTypes = {
  text: React.PropTypes.string,
  requestRandomText: React.PropTypes.func.isRequired,
};

export default RandomTextViewer;
