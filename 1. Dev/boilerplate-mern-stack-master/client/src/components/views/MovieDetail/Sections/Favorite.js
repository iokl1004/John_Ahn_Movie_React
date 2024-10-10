import { useEffect, useState } from "react"
import Axios from 'axios'

function Favorite(props) {
    const movieId = props.movieId;                  // Movie ID
    const userFrom = props.userFrom;                // Login User ID
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0)  // Favorite 갯수
    const [Favorited, setFavorited] = useState(false)        // 해당 movie에 대한 Favorite 유무

    useEffect(() => {
        // 얼마나 많은 사람이 이 영화를 Favorite 리스트에 넣었는지 그 숫자 정보 얻기
        let variables = {
            userFrom,
            movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log(response.data)
                setFavoriteNumber(response.data.favoriteNumber)
                if(response.data.success) {
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
             })

        // 내가 이 영화를 이미 Favorite 리스트에 넣었는지 아닌지 정보 얻기
        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
            if(response.data.success) {
                setFavorited(response.data.favorited)
            } else {
                alert('정보를 가져오는데 실패 했습니다.')
            }
        })

    }, [])

    return (
        <div>
            {/* Favorite을 누르지 않았더라면 "Not Favorite" 문구 출력, 눌렀을경우 "Add to Favorite" 츨력  */}
            <button>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite
