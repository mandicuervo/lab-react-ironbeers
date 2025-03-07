import './HomePage.css'
import HomeCards from "../../components/cards/HomeCard";
import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import { Link } from  'react-router-dom'

function HomePage() {
    return ( 
        <div className="HomePage">
            <Link className='links-content' to='/beers'>
                <HomeCards 
                image = { beers }
                title = 'All Beers'
                />
            </Link>
        
            <Link className='links-content' to='/beers/random-beer'>
                <HomeCards
                    image = { randomBeer }
                    title = 'Random Beer'
                />
            </Link>
            
            <Link className='links-content' to='/beers/new'>
                <HomeCards
                    image = { newBeer }
                    title = 'New Beer'
                />
            </Link>
        </div>
     );
}

export default HomePage;