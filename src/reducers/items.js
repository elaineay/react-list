const itemExpansions = (
      state = [
            {id: 0, text: "example list item"},
            {id: 1, text: "example 2"},
            {id: 2, text: "example 3"}
      ], action) => {
      switch (action.type) {
          case 'ADD_ITEM':
              return [
                  ...state,
                  {
                        ...action.text,
                  }
              ]
  
          case 'DELETE_ITEM':
              return [...state].filter((post) => {
                    return post.id !== action.id
              })
          
          default:
              return state;
      }
  }

  export default itemExpansions