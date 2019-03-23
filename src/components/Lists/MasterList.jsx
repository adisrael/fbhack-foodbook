import React, {Component} from 'react';
import photo from '../../Images/indianList.jpg';

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
    render(){
        return (
            <div className='MasterList' style={MasterListStyle}>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
                <List></List>
            </div>
        )
    }
}

class List extends Component {
    render(){
        return (
            <div className='List' style={body}>
                <section style ={cardStyle}>
                    <ListCard title="My grandmother's Indian recipe"></ListCard>
                    <ListCard title="The best of Chilean food"></ListCard>
                    <ListCard title="Japanese food and its mysteries"></ListCard>
                    <ListCard title='Recipes of the ancient samuai'></ListCard>
                    <ListCard title="The best recipes with rice"></ListCard>
                    <ListCard title="Recipes for romantic dinners"></ListCard>
                </section>
            </div>
        )
    }
}

class ListCard extends Component {
    render(){
        return (
            <div className='ListCards'  style= {cardContent}>
                <img src={photo} alt="Logo" style={imageStyles}/>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default MasterList