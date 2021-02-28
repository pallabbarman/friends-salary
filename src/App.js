import { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import Friends from './component/Friends/Friends';
import data from './FakeData/friends.json';

function App() {
    const [friends, setFriends] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setFriends(data);
        console.log(data);
    }, []);

    const handleAddUser = (friend) => {
        const newCart = [...cart, friend];
        setCart(newCart);
    };

    return (
        <div className="App">
            <div className="friends">
                {friends.map((friend) => (
                    <Friends friend={friend} key={friend.id} handleAddUser={handleAddUser} />
                ))}
            </div>
            <div className="cart">
                <h1>Total Friends: {friends.length}</h1>
                <Cart cart={cart} />
            </div>
        </div>
    );
}

export default App;
