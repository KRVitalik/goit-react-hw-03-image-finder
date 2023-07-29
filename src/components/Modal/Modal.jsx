import { Component } from "react";
import { Overlay } from "./Modal.styled";

class Modal extends Component{

  state = { 
  } 

  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEscape)
  }

  closeModalByEscape = (e) => {
    if (e.code !== 'Escape') {
      return
    } this.props.closeModal()
  }

  handleCloseClick = (e) => {
        if (e.target.tagName === "IMG") {
      return
    } this.props.closeModal()
  }
  
  render() { 
    const {largeImageURL}=this.props.image
    return (
      <Overlay
        onClick={this.handleCloseClick}>
  <Modal>
    <img src={largeImageURL} alt="" />
  </Modal>
</Overlay>
    );
  }
}
 
export default Modal;