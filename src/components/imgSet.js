import { all_images } from './ImgArray';

//random set of card from all img array (length = imgSetLength)
const imgSet = (imgSetLength) => {
  
  const randomImgArray =[]; 

  while(randomImgArray.length < imgSetLength){
    //get random img index from 0 to length of all_images array
    const randomImgIndex = Math.floor(Math.random()*all_images.length) 
    
    if(!randomImgArray.includes(all_images[randomImgIndex])){
      randomImgArray.push(all_images[randomImgIndex])
    }
  }
  return randomImgArray 
}

export default imgSet