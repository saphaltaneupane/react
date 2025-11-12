import {create} from 'zustand';

export const useStore = create((set) => ({  
    products:[
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 }
    ],

    searchTerm:"",
    category:"All",
    maxPrice:2000,

setsearchTerm:(term)=>
    set({searchTerm:term}), 
setcategory:(cat)=>
    set({category:cat}),
setmaxPrice:(price)=>
    set({maxPrice:price})
}));