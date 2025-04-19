import { toast } from "react-toastify"

const getAddtoCart=()=>{
    const storeList=localStorage.getItem("Cart-List")
    if(storeList){

        const storeData=JSON.parse(storeList)
        return storeData
    }
    else {
        return []
    }

}
const AddtoCartList=id=>{

    const storeList=getAddtoCart();
     if(storeList.includes(id)){
       toast.warning("You have Add To Cart All Ready")
     }
     else{
        storeList.push(id)
        const storeData=JSON.stringify(storeList)
        localStorage.setItem('Cart-List',storeData)
        toast.success("Add to Cart SuccessFully")
     }
}



//  wishlist
const getwshToLocalStorage = () => {
    const allWish = localStorage.getItem('wishlist')
    if (allWish) {
        const wish = JSON.parse(allWish);
        return wish;
    } else {
        return [];
    }
}

const setwishToLocalStorage = (product) => {
    const wishItem = getwshToLocalStorage();
    const isExists = wishItem.find( items => items.product_id === product.product_id);
    if (isExists) {
      return toast.warning('Already added to wishlist')
    } else {
        wishItem.push(product);
        const itemwish = JSON.stringify(wishItem);
        localStorage.setItem('wishlist', itemwish)
        toast.success('Successfully Added to wishlist!')
    }
   
}


export {AddtoCartList,getAddtoCart,setwishToLocalStorage,getwshToLocalStorage}