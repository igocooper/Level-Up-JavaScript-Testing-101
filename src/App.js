export const hello = () => 'Hello';

export const add = (x,y) => {
    if ( typeof x !== 'number' || typeof y !== 'number') {   
        return null;
    }
    return x + y;
}

export const total = (shipping, subTotal) => {
    return '$' + add(shipping,subTotal);
}