import React, { Component } from 'react'; 
import MasterList from './Lists/MasterList';
import Spinner from 'react-spinner-material';

const titleStyle = {
  textAlign: 'center',
  fontSize: '2.5em',
}

const spinnerStyle = {
  position: 'absolute', /* or absolute */
  top: '35%',
  left: '35%',
}

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = { listas: [], loading: true }
  }

  componentWillMount() {
    fetch ('https://sheetsu.com/apis/v1.0su/80f1b4bb9eb3')
      .then((response) => {
        return response.json()
      })
      .then((listas) => {
        this.setState({ listas, loading: false})
      })
  }

  render() {
    let content;
    if (this.state.loading) {
      content = <div style={spinnerStyle}><Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} /></div>
    } else {
      content = this.state.listas.map(elements =>{
        return (
          <MasterList Id={elements.Id} recipeHandler={this.props.recipeHandler} menuClickHandler={this.props.menuClickHandler} key={elements.Id} title={elements.Nombre} description={elements.Descripcion} sheet={elements.Sheet}/>
        )
      })
    }
    return (
        <div>
          <h1 style = {titleStyle}>Home</h1>
          {content}
        </div>
    );
  }
}

export default Home;