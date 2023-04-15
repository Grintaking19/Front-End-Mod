import {React, useState, useEffect} from "react";
import styles from "./Categories.module.css"
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
      <div className="container">
        <div className={styles['location']}>
          <h2 className={styles['popular-in']}>Popular in</h2>
          { !(props.location.loading) ? (
            <h2 className={styles['location--text']} style={{ color: '#3659E3' }}>{props.location.city}</h2>
          ) : (
            <h2 className={styles['location--text']} style={{ color: '#3659E3' }}>Loading Location ...</h2>
          )}
        </div>

        <div className={styles['categories-tabs']}>
          <ul className="nav nav-tabs">
            <li className={`nav-item ${styles['_nav-item']}`}>
            <a
                className={`nav-link ${props.activeTab === 'online' ? 'active' : ''}`}
                aria-current="page"
                onClick={() => props.setActiveTab('online')}
              >
              Online
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`}>
            <a
                className={`nav-link ${props.activeTab === 'today' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('today')}
              >
                Today
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`}>
            <a
                className={`nav-link ${props.activeTab === 'thisweekend' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('thisweekend')}
              >
                This weekend
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`}>
            <a
                className={`nav-link ${props.activeTab === 'free' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('free')}
              >
                Free
              </a>
            </li>
            <li className={`nav-item ${styles['_nav-item']}`}>
            <a
                className={`nav-link ${props.activeTab === 'charity' ? 'active' : ''}`}
                onClick={() => props.setActiveTab('charity')}
              >
                Charity&Causes
              </a>
            </li>
          </ul>
        </div>
        <div className={styles['trending-categories']}>
          <h4 id="trending-categories--text">Check out trending categories</h4>
        </div>

        <div className="album py">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <FiMusic className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Music</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <FaTheaterMasks className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Performing & Visual Arts</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <MdOutlinePhotoLibrary className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Holiday</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <FiHeart className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Health & Fitness</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <TbDeviceGamepad2 className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Hobbies</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <MdOutlineBusinessCenter className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Business</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <BiDrink className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Food & Drink</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                  <TbShirtSport className={styles['category--icon']} />
                  <h5 className={`d-inline-block align-text-top ${styles['category--name']} ${styles['event-card--name']}`}>Sports & Fitness</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['events-in']}>
          <h4 id="trending-categories--text">Events in {props.location.city }</h4>
        </div>
      </div>
    </div>
  )
}