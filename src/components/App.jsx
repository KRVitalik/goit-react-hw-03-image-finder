import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const modalWindow = document.querySelector('#modal-root')

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}
 
export default App;
