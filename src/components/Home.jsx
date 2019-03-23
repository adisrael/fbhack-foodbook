import React, { Component } from 'react'; 
import MasterList from './Lists/MasterList';

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = { listas: [] }
  }

  componentWillMount() {
    fetch ('https://sheetsu.com/apis/v1.0bu/3ca44327cf01')
      .then((response) => {
        return response.json()
      })
      .then((listas) => {
        this.setState({ listas })
      })
  }

  render() {
    return (
        <div>
           <h1>Home</h1>
          <p>{this.state.listas.Nombre}</p>
          {this.state.listas.map(elements =>{
            return (
              <MasterList id={elements.id} title={elements.Nombre} description={elements.Descripcion} sheet={elements.Sheet}/>
            )
          })}
        </div>
    );
  }
}

export default Home;