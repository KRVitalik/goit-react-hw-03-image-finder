import { Component } from "react";
import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, SearchbarStyled } from "./Searchbar.styled";

class Searchbar extends Component {
  state = { 
    value:''
  } 

  handleChange = ({target:{value}}) => {
    this.setState({value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: ''})
}
  
  render() { 
    return ( 
<SearchbarStyled>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormButton type="submit">
      <SearchFormButtonLabel />
    </SearchFormButton>
    <SearchFormInput
      onChange={this.handleChange}
      value={this.state.value}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchbarStyled>
     );
  }
}
 
export default Searchbar;