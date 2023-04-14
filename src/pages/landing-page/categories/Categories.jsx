import {React, useState, useEffect} from "react";
import "./categories.css"
import { FiMusic, FiHeart } from "react-icons/fi"
import { FaTheaterMasks } from "react-icons/fa"
import { MdOutlinePhotoLibrary, MdOutlineBusinessCenter } from "react-icons/md"
import { TbDeviceGamepad2, TbShirtSport } from "react-icons/tb"
import { BiDrink } from "react-icons/bi"


const OPENCAGE_API_KEY = "ca1e044266af4d9b92d96cd6a63f857f";
// const OPENCAGE_API_KEY = "";

export default function Categories(props) {

  useEffect(() => {
    props.setLocation({loading:true})
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
      },
      (error) => {
        console.error(error); // log any errors that occur
      }
    );
  }, []);

  return (
    <div>
      <div class="container">
        <div class="location">
          <h2 class="popular-in">Popular in</h2>
          { !(props.location.loading) ? (
            <h2 class="location--text" style={{ color: '#3659E3' }}>{props.location.city}</h2>
          ) : (
            <h2 class="location--text" style={{ color: '#3659E3' }}>Loading Location ...</h2>
          )}
        </div>

        <div class="categories-tabs">
          <ul class="nav nav-tabs">
            <li class="nav-item">
            <a
                className={`nav-link ${props.activeTab === 'online' ? 'active' : ''}`}
                aria-current="page"
                onClick={() => props.setActiveTab('online')}
              >
              Online
              </a>
            </li>
            <li class="nav-item">
            <a
                className={`nav-link ${props.activeTab === 'today' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('today')}
              >
                Today
              </a>
            </li>
            <li class="nav-item">
            <a
                className={`nav-link ${props.activeTab === 'thisweekend' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('thisweekend')}
              >
                This weekend
              </a>
            </li>
            <li class="nav-item">
            <a
                className={`nav-link ${props.activeTab === 'free' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('free')}
              >
                Free
              </a>
            </li>
            <li class="nav-item">
            <a
                className={`nav-link ${props.activeTab === 'charity' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('charity')}
              >
                Charity&Causes
              </a>
            </li>
          </ul>
        </div>
        <div class="trending-categories">
          <h4 id="trending-categories--text">Check out trending categories</h4>
        </div>

        <div class="album py">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <FiMusic class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Music</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <FaTheaterMasks class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Performing & Visual Arts</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <MdOutlinePhotoLibrary class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Holiday</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <FiHeart class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Health & Fitness</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <TbDeviceGamepad2 class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Hobbies</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <MdOutlineBusinessCenter class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Business</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <BiDrink class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Food & Drink</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{ width: '18rem' }}>
                <div class="card-body">
                  <TbShirtSport class="category--icon" />
                  <h5 class="event-card--name d-inline-block align-text-top category--name">Sports & Fitness</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="events-in">
          <h4 id="trending-categories--text">Events in {props.location.city }</h4>
        </div>
      </div>
    </div>
  )
}