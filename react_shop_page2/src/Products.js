import './App.css';
import android from './android.jpg';
import smile from './smile.jpg';


function Products() {
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

    // let cookiesListConverted = cookiesList.map(cookie => <div key = {cookie.id} className = "cookie">
    //     <img src={cookie.image}></img>
    //     <h3>{cookie.name}</h3>
    //     <p>{cookie.price} K.D.</p>
    // </div>);

    return ( 
        <div className = "cookiesList">
            <div key = {cookiesList[0].id} className = "cookie">
        <img src={cookiesList[0].image}></img>
        <h3>{cookiesList[0].name}</h3>
        <p>{cookiesList[0].price} K.D.</p>
    </div>
    <div key = {cookiesList[1].id} className = "cookie">
        <img src={cookiesList[1].image}></img>
        <h3>{cookiesList[1].name}</h3>
        <p>{cookiesList[1].price} K.D.</p>
    </div>
        </div>
  );
}

export default Products;
