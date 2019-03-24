import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ItemList extends Component {
    constructor(props, context) {
        super(props, context)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {show:false}
      }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render(){
        return ( 
            <div className='ItemList'>
                <Button variant="primary" onClick={this.handleShow} size="lg" block>
                {this.props.title}
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {this.props.parrafo.map(elements =>{
                    return (
                    <p>{elements}</p>
                    )
                })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ItemList