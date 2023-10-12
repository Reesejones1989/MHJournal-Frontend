import {Link} from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className='Nav'>
    <Link id='AllNavLinks' to="/">
        <div>Home</div>
    </Link>
    <Link id='AllNavLinks' to="/journals">
        <div>Journals</div>
    </Link>
    <Link id='AllNavLinks' to="/about">
        <div>About</div>
    </Link>
    
    </div>
  )
}