import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './post-list-item.css';

export default class PostListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      important: false,
      like: false,
      modal: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onImportant(){
    this.setState(({important}) => ({
      important: !important
    }));
  }
  onLike(){
    this.setState(({like}) => ({
      like: !like
    }));
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const {label, onDelete} = this.props;
    const {important, like} = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) {
      classNames += ' important';
    }
    if (like) {
      classNames += ' like';
    }
    return (
      <div className={classNames}>
      <span 
      className="app-list-item-label"
      onClick={this.onLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button 
          type="button" 
          className="btn-star btn-sm" onClick={this.onImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button 
          type="button" 
          className="btn-trash btn-sm"
          onClick={this.toggle}>
          <i className="fa fa-trash-o"></i>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Подтверждение</ModalHeader>
          <ModalBody>
            Вы точно собираетесь удалить запись ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onDelete}>Да</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Нет</Button>
          </ModalFooter>
        </Modal>
        <i className="fa fa-heart"></i>
      </div>
    </div>
    )
  }
}

