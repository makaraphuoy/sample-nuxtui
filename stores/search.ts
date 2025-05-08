import { defineStore } from "pinia";
import type { Param, Product } from "~/types/hotel";


export const useSearch = defineStore('seach',()=>{
  const data = ref<Array<Product>|null>(null);
  const isSearch = ref(false);

  const search = (param : Param) =>{
    console.log('param=>', param);
    data.value = resData;
    isSearch.value = true;
  };
  
  const reset = () => {
    data.value = null;
    isSearch.value = false;
  }

  return {
    search,
    data,
    reset,
    isSearch
  }
})


const resData = [
  {
    id:1,
    name: 'Grand Luxury Resort',
    image: 'https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg'
    },
    {
    id:2,
    name: 'Grand Luxury Resort',
    image: 'https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg'

    },
    {
    id:3,
    name: 'Grand Luxury Resort',
    image: 'https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg'

    },
    {
    id:4,
    name: 'Grand Luxury Resort',
    image: 'https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg'

    }
]