import { FC } from "react"
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import styles from "./ProductSlideShow.module.css"


interface Props {
  images: string[];
}

const ProductSlideShow: FC<Props> = ({images}) => {
  return (
    <Slide
    >
{
        images.map(image=>{
          const url =`${image}`;
          return(
          <div className={styles['each-slide']} key={image}>
            <div style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover"
            }} > 

            </div>
          </div>
          )
        })
      }      
    </Slide>
  )
}

export default ProductSlideShow