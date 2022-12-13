import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {

    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=21d6ac12&s=harry')
    console.log("response", response)

    return response.data;
}
)
export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (id) => {

    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=21d6ac12&i={id}&Plot=full')
    console.log("response", response)

    return response.data;
}
)

const initialState = {
    movies: {},
    selectMovie: {}

}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.selectMovie = {}
        }

    },
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
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
            state.selectMovie = payload
        }

    }
})
export const getAllMovies = (state) => state.movieRed.movies;
export const getAllMovieDetails = (state) => state.movieRed.selectMovie;
export const { removeSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;