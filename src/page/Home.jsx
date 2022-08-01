import './Home.scss'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/Featured/Featured';
import List from '../components/List/List';

function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <Featured type='movie' />
            <List />
            <List />
            <List />
            <List />
            <List />
            
        </div>
    )
}

export default Home
