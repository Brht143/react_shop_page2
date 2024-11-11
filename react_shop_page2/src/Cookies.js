import './App.css';
import android from './android.jpg';
import smile from './smile.jpg';


function Cookies() {
    let cookiesList = [];

    cookiesList.push({
        "id": 0,
        "image":android,
        "name": "Mini",
        "price": "1"
    },
    {
        "id": 1,
        "image":smile,
        "name": "Large",
        "price": "2.5"
    })

    return ( 
        <div className = "cookiesList">
            {cookiesList.map(cookie => <div key = {cookie.id} className = "cookie">
                <img src={cookie.image}></img>
                <h3>{cookie.name}</h3>
                <p>{cookie.price} K.D.</p>
            </div>)}
        </div>
  );
}

export default Cookies;
