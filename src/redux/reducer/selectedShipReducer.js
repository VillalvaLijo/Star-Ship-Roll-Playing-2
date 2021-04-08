

const selectedShipReducer = ( state = {}, action) => {
    switch(action.type){
        case 'CREATE_NEW_SHIP':
            return 'create_new_ship';
        case 'SHIP_SELECTED':
            return state;
        case 'NEW_SHIP_CREATED':
            return action.payload;
        default:
            return state;
    }
}

export default selectedShipReducer;
