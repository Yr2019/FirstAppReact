import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props, onAdd) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
      const {onAdd} = this.props;
      return (
    <div className="bottom-panel d-flex">
      <input 
        type="text"
        id="PopoverFocus" 
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label" />
          <Button 
            color="success"
            type="submit"
            onClick={() => onAdd('Hello')}>
          Добавить</Button>
        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
          <PopoverHeader>New-Post</PopoverHeader>
          <PopoverBody>You can easily create new post. Only write what you think and click button to add New Post to programs</PopoverBody>
        </UncontrolledPopover>
    </div>
  )
  }
}


