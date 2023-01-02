import { useParams } from "react-router-dom";

const Search = () => {
  const search = useParams()

  console.log(search)

  return ( 
    <div>
      {search.movie}
    </div>
   );
}
 
export default Search;