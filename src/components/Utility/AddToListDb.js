// Utility functions for managing cart and wishlist in localStorage

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cartList');
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      return storedList;
    } else {
      return [];
    }
  };
  
  const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wishList');
    if (storedWishListStr) {
      const storedWishList = JSON.parse(storedWishListStr);
      return storedWishList;
    } else {
      return [];
    }
  };
  
  const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
      console.log(id, "already exists in the cart list");
    } else {
      storedList.push(id);
      const storedListStr = JSON.stringify(storedList);
      localStorage.setItem('cartList', storedListStr);
    }
  };
  
  const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
      console.log(id, 'already exists in the wish list');
    } else {
      storedWishList.push(id);
      const storedWishListStr = JSON.stringify(storedWishList);
      localStorage.setItem('wishList', storedWishListStr);
    }
  };
  
  export { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList };
  