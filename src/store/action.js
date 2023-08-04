import CONSTANT from "./types"

export const mobileDevelopment = (data, type) => dispatch => {
    dispatch({
      type: CONSTANT.MOBILEDVELOPMENT,
      payload: data
    })
  }