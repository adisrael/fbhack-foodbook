import React, {Component} from 'react';
import uid from 'uid';
import Spinner from 'react-spinner-material';

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

const spinnerStyle = {
    marginLeft:'auto',
    marginRight:'auto'
  }

class MasterList extends Component {
    constructor(props) {
        super(props)
          this.state = { listas: [], loading: true }
          this.redirect = {1:3,3:3,4:4}
      }

      componentWillMount() {

        fetch (this.props.sheet)
        .then((response) => {
            return response.json()
          })
          .then((listas) => {
            this.setState({ listas, loading: false })
          })
      }
      
    render(){
        let content;
        if (this.state.loading) {
        content = <div style={spinnerStyle}><Spinner size={60} spinnerColor={"#333"} spinnerWidth={2} visible={true} /></div>
        } else {
            content = this.state.listas.map(elements =>{
                return (
                <ListCard redirect={this.redirect[this.props.Id]} recipeHandler={this.props.recipeHandler} menuClickHandler={this.props.menuClickHandler} Ide={elements.Id} key={uid()} title={elements.Nombre} image={elements.Imagen}/>
                )
            })
        }
        return ( 
            <div className='MasterList' style={MasterListStyle}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <div style={body}>
                <section style = {cardStyle}>
                {content}
                </section>
            </div>
            </div>
        )
    }
}

class ListCard extends Component {
    constructor(props){
        super(props)
        this.sendRecipes = this.sendRecipes.bind(this)
    }


    sendRecipes(){
        this.props.recipeHandler(this.props.Ide)
        this.props.menuClickHandler(this.props.redirect)
    }

    render(){
        return (
            <div className='ListCards'  style= {cardContent} onClick={this.sendRecipes}>
                <img  src={this.props.image} alt="Logo" style={imageStyles}/>
                <h6>{this.props.title}</h6>
            </div>
        )
    }
}

export default MasterList