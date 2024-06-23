//import { createSlice } from "@reduxjs/toolkit";

/*const initialState = { 
    orderItem:[

    ],
shippingAddress: {
},
paymentMethod: '',
itemsPrice: 0,
shippingPrice: 0,
taxPrice: 0,
totalPrice:0,
user: '',
isPaid:false,
paidAt: '',
isDelivered: false,
deliverAt: '',
}

export const orderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOderProduct: (state, action) => {
            const { oderItem} = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === orderItem?.product)
            if(itemOrder){
                itemOrder.amount += orderItem?.amount
            }else{
                state.orderItem.push(orderItem)
            }
        },
        increaseAmount: (state, action) => {

        },
        removeOrderProduct: (state, action) => {
            const {idProduct} = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product !== idProduct )
            itemOrder.orderItems = itemOrder
        },
    },
})

export const { searchProduct } = orderSlide.actions

export default orderSlide.reducer

shippingAddress: {
    fullName: { type: String,required: true},
    address: { type: String,required: true},
    city: { type: String,required: true},
    phone: { type: Number,required: true},
},
paymentMethod: { type: String,requied: true},
itemsPrice: { type: Number,required: true},
shippingPrice: { type: Number,required: true},
taxPrice: { type: Number,required: true},
totalPrice: { type: Number,required: true},
user: { type: mongose.Schema.Types.ObjectId,ref: 'user',required: true},
isPaid: { type: Boolean, default: false},
paidAt: { type: Date},
isDelivered: { type: Boolean,default: false},
deliverAt: { type: Date},
}*/