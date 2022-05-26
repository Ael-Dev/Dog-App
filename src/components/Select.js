import React,{useState, useEffect} from 'react';
import { getBreeds } from '../helpers/getBreeds';
import { Error } from './Error';

const initialState = [
    {id:'1', name:'puppy'}
]

export const Select = ({updateDog}) => {
    
    const [breeds, setBreeds] = useState(initialState);

    const [error, setError] = useState(null);


    const updateBreeds = () => {
        getBreeds()
            .then((bread) => {
                setBreeds(bread);
            })
            .catch((error) => {
                console.log(error);
                setError("Error al cargar las razas de los perros");
            })
    }
    
    useEffect (() =>{
        updateBreeds();
    },[]);

    return (
        <div>
            <select onChange={(e) => (updateDog(e.target.value))} >
                {
                    breeds.map((breed) => (
                        <option key={breed.id} value={breed.id}>{
                            breed.name}
                        </option>
                    ))
                }
            </select>
            {error && <Error error = {error}/>}
        </div>
    )
}
