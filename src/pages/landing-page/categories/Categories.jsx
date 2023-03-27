import React from "react";
import "./categories.css"
import {FiMusic, FiHeart} from "react-icons/fi"
import {FaTheaterMasks} from "react-icons/fa"
import {MdOutlinePhotoLibrary, MdOutlineBusinessCenter} from "react-icons/md"
import {TbDeviceGamepad2, TbShirtSport} from "react-icons/tb"
import {BiDrink} from "react-icons/bi"


export default function Categories(){
    return (
      <div>
        <div class="container">
          <div class="location">
            <h2 class="popular-in">Popular in</h2>
            <h2 class="location--text" style={{ color: '#3659E3' }}>Cairo</h2>
          </div>

          <div class="categories-tabs">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Online</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Today</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">This weekend</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Free</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Charity & Causes</a>
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
          <h4 id="trending-categories--text">Events in Cairo</h4>
          </div>
        </div>
      </div>
    )
}