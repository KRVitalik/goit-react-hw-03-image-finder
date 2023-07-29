import { GalleryItemStyled, ImageGalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ images, handleImageClick }) => {
  return (images.map(image => {
    const {id, webformatURL, tags}=image
    return <GalleryItemStyled key={id}>
      <ImageGalleryItemImage
        
        src={webformatURL}
        alt={tags} 
        onClick={()=> handleImageClick(image) }
      />
</GalleryItemStyled>
  }) );
}

export default ImageGalleryItem;