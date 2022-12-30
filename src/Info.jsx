import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getVideo } from "./api/api";

const Info = () => {
  const [movieDetails, setMovieDetails] = useState([])
  const [movieVideo, setMovieVideo] = useState([])
  const movie = useParams()

  useEffect(() => {
    getDetails(movie.id).then((response) => {
      setMovieDetails(response)
    })

    getVideo(movie.id).then((response) => {
      setMovieVideo(response)
    })
  }, [])

  return ( 
    <div>
        Olá
    </div>
   );
}
 
export default Info;