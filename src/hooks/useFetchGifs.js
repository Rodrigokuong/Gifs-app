import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState([]);
    
    const getImg = async () => {
        const newImg = await getGifs(category);
        setImages(newImg);
        setisLoading(false);
    }

    useEffect(() => {
        getImg();
    }, []);

  return {
    images,
    isLoading
  }
}
