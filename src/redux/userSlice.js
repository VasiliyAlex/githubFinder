import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";


const createSlice = buildCreateSlice({
    creators: {
        asyncThunk: asyncThunkCreator,
    },
});

export const userSlice = createSlice({
    name:'userSlice',
    initialState:{
        user: null,
        repos: null
    },
    reducers: (create) => ({
        reposSort: create.reducer((state, action) => {
            
            // state.repos?.sort(function(a, b){return a[action.payload] - b[action.payload]})
            state.repos?.sort(function (a, b) {
                if (a[action.payload].toString().toLowerCase() > b[action.payload].toString().toLowerCase()) { 
                  return 1;
                }
                if (a[action.payload].toString().toLowerCase() < b[action.payload].toString().toLowerCase()) {
                  return -1;
                }
                return 0;
              });
        }),
        
        
        getGithubuser: create.asyncThunk( async (search) => {
            let res = await fetch(`https://api.github.com/users/${search}`) 
            let data = await res.json()
            if (res.status === 404) {
                return null
            }
            return data
         },{
            pending: (state,action) => {
                console.log(1);
            }, fulfilled: (state, action) => {
                state.user = action.payload
                console.log(2)
            },
            rejected: (state, action) => {
                
            },
            
         }),
        getUserrepos: create.asyncThunk( async (search) => {
            let res = await fetch(`https://api.github.com/users/${search}/repos`) 
            let data = await res.json()
            if (res.status === 404) {
                return null
            }
            return data
         },{
            pending: (state,action) => {
                console.log(11);
            }, fulfilled: (state, action) => {
                state.repos = action.payload
                console.log(22);
            },
            rejected: (state, action) => {
                console.log(3);
            },
         })
    })
})

export const {getGithubuser, getUserrepos, reposSort} = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state) => state.user;  