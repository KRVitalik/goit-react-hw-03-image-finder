import { ButtonLoad } from "./Button.styled";

const Button = ({ handleLoadMore }) => {
    return ( 
        <ButtonLoad onClick={handleLoadMore} type="button">Load more</ButtonLoad>
     );
}
 
export default Button;