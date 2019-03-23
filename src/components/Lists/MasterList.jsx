import React, {Component} from 'react';

const MasterListStyle = {
    textAlign: 'Center'
}

const body = {
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

const cardStyle = {
    color: 'black',
    minWidth: '100%',
    minHeight: '150px',
    display: 'flex',
    overflowX: 'auto'
}
  
const cardContent = {
    minWidth: '200px',
    margin: '5px',
  }

const imageStyles = {
    height: '120px',
    width: '150px',
    borderRadius: '50px'
}

class MasterList extends Component {
    constructor(props) {
        super(props)
          this.state = { listas: [] }
      }

      componentWillMount() {

        fetch (this.props.sheet)
        .then((response) => {
            return response.json()
          })
          .then((listas) => {
            this.setState({ listas })
          })
      }
      
    render(){
        return ( 
            <div className='MasterList' style={MasterListStyle}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <div style={body}>
                <section style = {cardStyle}>
                {this.state.listas.map(elements =>{
                    return (
                    <ListCard id={elements.id} title={elements.Nombre} image={elements.Imagen}/>
                    )
                })}
                </section>
            </div>
            </div>
        )
    }
}

class ListCard extends Component {
    render(){
        return (
            <div className='ListCards'  style= {cardContent}>
                <img src={this.props.image} alt="Logo" style={imageStyles}/>
                <h6>{this.props.title}</h6>
            </div>
        )
    }
}

export default MasterList