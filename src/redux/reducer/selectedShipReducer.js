

const selectedShipReducer = ( state = {}, action) => {
    switch(action.type){
        case 'CREATE_NEW_SHIP':
            return {};
        case 'SHIP_SELECTED':
            return {};
    }
}

export default selectedShipReducer;