const key = "b76c6f36360195bd1f13c097233e4cbf"
const requests = {
    requestPoplar:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
};

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzZjNmYzNjM2MDE5NWJkMWYxM2MwOTcyMzNlNGNiZiIsInN1YiI6IjYzYTcwM2ZmYWVkZTU5MDA4NDE5ZjIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y448GD8XEVm_Pz4YeTjmiTqmVyU9LOS_yb7oTzsZKgI"

export default requests