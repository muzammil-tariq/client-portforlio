const { default: CONSTANT } = require("./types")

const INITIAL_STATE = {
    mobileDev: false
}
 export function mobileDevelopment(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANT.MOBILEDVELOPMENT:
            return {
                ...state,
                task: mobileDev.payload
            }

        default:
            return state
    }
}
