export const addCartitem=(cartitems,addtocart) => {
	const isexisting = cartitems.find(item=> item.id === addtocart.id);
	if(isexisting){
		return cartitems.map(item=>
			item.id === addtocart.id ?
			{...item,quantity:item.quantity + 1}
			:
			item
		)
	}
	return [...cartitems,{...addtocart,quantity:1}]
}

export const removeCartItem = (cartitems,removetocart) => {
	const modifiedcart =cartitems.filter(item=>item.id !== removetocart.id);
	return modifiedcart;	
}

export const removeCartOne = (cartitems,cartone) =>{
	 return cartitems.map(item =>
		item.id === cartone.id ?
			{...item,quantity:item.quantity-1}
		:
		item
		)
	}