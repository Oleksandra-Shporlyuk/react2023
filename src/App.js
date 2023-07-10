import React from 'react';
import Simpson from "./components/Simpsons/Simpson";
import './App.css';
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
const App = () => {
    return (
        <div>
            <div>
                <h1>SIMPSONS</h1>
                <Simpson name={'Bart'} surname={'Simson'} age={'17'} photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
                <Simpson name={'Homer'} surname={'Simpson'} age={'45'} photo={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            </div>
            <div>
                <h1>RICK AND MORTY</h1>
                <RickAndMorty name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
                <RickAndMorty name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
                <RickAndMorty name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
                <RickAndMorty name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
                <RickAndMorty name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
                <RickAndMorty name={'Abadango Cluster Princess'} status={'Alive'} species={'Alive'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
            </div>
        </div>
    );
};

export default App;