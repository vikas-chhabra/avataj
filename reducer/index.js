export default countReducer = (state={count:0},action) =>{
    var newState = Object.assign({},state);
    switch (action.type) {
        case "updateCount":
            return newState = {count: newState.count + 1};
        default:
            return newState;
    }
}