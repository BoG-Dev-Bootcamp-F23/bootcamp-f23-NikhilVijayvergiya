import { BrowserRouter, Route, Routes } from 'react-router-dom';
import aboutMarta from '..//aboutMarta.jpg'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function About() {
    const navigate = useNavigate(); 


    return (
        <div className="AboutMarta">
            <div id = "aboutHeader">
                <button id = "homeButton" onClick={() => navigate('/')}> Home </button>
                <h1 >About Marta</h1>
            </div>
            <div class = "aboutBottom">
                <img id="aboutImage" src={aboutMarta} alt="aboutmarta" />
                <div class = "aboutInfo">
                    <p>
                        "To advocate for and provide safe, multimodal transit services that advance prosperity, connectivity, and equity for a more livable region."
                    </p>
                    <br/>
                    <br/>
                    <p> MARTA, which stands for the Metropolitan Atlanta Rapid Transit Authority, serves the purpose of providing public transportation services in the Atlanta metropolitan area. It offers a network of buses and a rapid transit system to help residents and visitors commute, reducing traffic congestion, promoting environmental sustainability, and improving accessibility within the city.   </p>
                </div>
            </div>
        </div>
    );



}