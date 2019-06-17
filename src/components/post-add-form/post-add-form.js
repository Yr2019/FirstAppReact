import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props, onAdd) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      popoverOpen: false,
      text: ''
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  onValueChange(e){
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.text !== '') {
      this.props.onAdd(this.state.text);
      this.setState({
        text: ''
      });
    }
  }
  render() {
      return (
    <form 
      className="bottom-panel d-flex"
      onSubmit={this.onSubmit}>
      <input 
        type="text"
        id="PopoverFocus" 
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label"
        onChange={this.onValueChange} 
        value={this.state.text}/>
          <Button 
            color="success"
            type="submit"
            >
          Добавить</Button>
        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
          <PopoverHeader>New-Post</PopoverHeader>
          <PopoverBody>You can easily create new post. Only write what you think and click button to add New Post to programs</PopoverBody>
        </UncontrolledPopover>
    </form>
  )
  }
}


