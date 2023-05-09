import {React, useState, useEffect} from "react";
import styles from "./Categories.module.css"
import { FiMusic, FiHeart } from "react-icons/fi"
import { FaTheaterMasks } from "react-icons/fa"
import { MdOutlinePhotoLibrary, MdOutlineBusinessCenter } from "react-icons/md"
import { TbDeviceGamepad2, TbShirtSport } from "react-icons/tb"
import { BiDrink } from "react-icons/bi"
import { useNavigate } from "react-router-dom";


const OPENCAGE_API_KEY = "ca1e044266af4d9b92d96cd6a63f857f";
// const OPENCAGE_API_KEY = "";

export default function Categories(props) {

  useEffect(() => {
    if (localStorage.getItem("city")) {props.setLocation({ latitude: localStorage.getItem('latitude'), longitude:localStorage.getItem('longitude'), city:localStorage.getItem('city'), loading:false});}
    else
    {props.setLocation({loading:true})
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // const loadingCity=''
        const { latitude, longitude } = await(position.coords); // destructure latitude and longitude from the position object
        // props.setLocation({ latitude, longitude, loadingCity }); // update the state with the latitude, longitude, and city
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`; // construct the OpenCage API URL with the latitude, longitude, and API key
        const response = await fetch(url); // make a fetch request to the OpenCage API
        const data = await response.json(); // parse the response body as JSON
        const city = data.results[0].components.city; // extract the city from the OpenCage API response
        props.setLocation({ latitude, longitude, city, loading:false}); // update the state with the latitude, longitude, and city
        localStorage.setItem('longitude', longitude)
        localStorage.setItem('latitude', latitude)
        localStorage.setItem('city',city)
      },
      (error) => {
        console.error(error); // log any errors that occur
      }
    );}
  }, []);

  const navigate = useNavigate()
  const categoryCardClick = (selectedCategory) => {
    // setSelectedEvent(event);
    navigate(`/categorized/${selectedCategory}/${props.location.longitude}/${props.location.latitude}`);
  }

return (
    <div id="main-container">
    <div id= "popular-in-container" className="container">
    <div className={styles['location']} id="location-container">
    <h2 className={styles['popular-in']} id="popular-in-heading">Popular in</h2>
    { !(props.location.loading) ? (
    <h2 className={styles['location--text']} style={{ color: '#3659E3' }} id="location-text">{props.location.city}</h2>
    ) : (
    <h2 className={styles['location--text']} style={{ color: '#3659E3' }} id="location-loading">Loading Location ...</h2>
    )}
    </div>
    
        <div className={styles['categories-tabs']} id="categories-container">
          <ul className={`nav nav-tabs nav-pills flex-wrap ${styles['_nav-tabs']}`} id="categories-tabs">
            <li className={`nav-item ${styles['_nav-item']}`} id="online-tab">
            <a
                className={`nav-link ${props.activeTab === 'online' ? 'active' : ''}`}
                aria-current="page"
                onClick={() => props.setActiveTab('online')}
                id="online-link"
              >
              Online
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`} id="today-tab">
            <a
                className={`nav-link ${props.activeTab === 'today' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('today')}
                id="today-link"
              >
                Today
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`} id="this-weekend-tab">
            <a
                className={`nav-link ${props.activeTab === 'thisweekend' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('thisweekend')}
                id="this-weekend-link"
              >
                This weekend
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`} id="free-tab">
            <a
                className={`nav-link ${props.activeTab === 'free' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('free')}
                id="free-link"
              >
                Free
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`} id="charity-tab">
            <a
                className={`nav-link ${props.activeTab === 'charity' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('charity')}
                id="charity-link"
              >
                Charity&Causes
              </a>
            </li>
          </ul>
        </div>
        <div className={styles['trending-categories']} id="trending-categories-container">
          <h4 id="trending-categories-heading">Check out trending categories</h4>
        </div>
    
        <div className="album py" id="category-cards-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3" id="category-cards-row">
            <div className="col" id="music-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Music')}>
                <div className="card-body" >
                  <FiMusic className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="music-card-name">Music</h5>
                </div>
              </div>
            </div>
            <div className="col" id="arts-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Performing&VisualArts')}>
                <div className="card-body">
                  <FaTheaterMasks className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="arts-card-name">Performing & Visual Arts</h5>
                </div>
              </div>
            </div>
            <div className="col" id="holiday-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Holiday')}>
                <div className="card-body">
                  <MdOutlinePhotoLibrary className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="holiday-card-name">Holiday</h5>
                </div>
              </div>
            </div>
            <div className="col" id="health-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Health&Fitness')}>
                <div className="card-body">
                  <FiHeart className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="health-card-name">Health & Fitness</h5>
                </div>
              </div>
            </div>
            <div className="col" id="hobbies-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Hobbies')}>
                <div className="card-body">
                  <TbDeviceGamepad2 className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="hobbies-card-name">Hobbies</h5>
                </div>
              </div>
            </div>
            <div className="col" id="business-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Business')}>
                <div className="card-body">
                  <MdOutlineBusinessCenter className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="business-card-name">Business</h5>
                </div>
              </div>
            </div>
            <div className="col" id="food-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Food&Drink')}>
                <div className="card-body">
                  <BiDrink className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="food-card-name">Food & Drink</h5>
                </div>
              </div>
            </div>
            <div className="col" id="sports-card">
              <div className="card shadow-sm" style={{ width: '18rem' }} onClick={() => categoryCardClick('Sports&Fitness')}>
                <div className="card-body">
                  <TbShirtSport className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`} id="sports-card-name">Sports & Fitness</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div className={styles['events-in']} id="events-in">
      <h4 id="trending-categories--text">Events in {props.location.city }</h4>
    </div>
  </div>
</div>
)
    }