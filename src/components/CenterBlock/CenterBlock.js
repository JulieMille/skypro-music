import './CenterBlock.css';
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import Tracks from '../Tracks/Tracks'

function CenterBlock({ isLoading }) {
    return (
        <div className="main__centerblock centerblock">
              <Search/>
              <h2 className="centerblock__h2">Треки</h2>
              <Filter/>
              <Tracks isLoading={isLoading}/>
            </div>
    )
}

export default CenterBlock;