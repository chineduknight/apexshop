const commonState = {
  processing:false,
  processed:false,
  success:false,
  errors:{},
  message:"",
}
export const defaultSingleObjectState:SingleObjectState ={
  ...commonState,
  data:{},
}

export const defaultManyObjectState ={
  ...commonState,
  data:[],
  pagination:{
    currentPage:"",
    nextPage:"",
    totalEntries:0
  }
}