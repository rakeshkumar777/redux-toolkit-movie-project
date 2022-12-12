import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {

    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=21d6ac12&s=harry')
    console.log("response", response)

    return response.data;
}
)


const initialState = {
    movies: {}

}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully')
             state.movies = payload
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        }

    }
})
export const getAllMovies = (state) => state.movieRed.movies;

export default movieSlice.reducer;