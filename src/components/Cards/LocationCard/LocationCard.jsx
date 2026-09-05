import React from 'react'
import { Link } from 'react-router-dom'
import Directions from '../../../assets/icons/directions-icon.png'
import styles from './LocationCard.module.scss'

const LocationCard = ({ location, onSelect, isSelected }) => {
    const fullAddress = `${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`;
    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

    return (
       <article className={`${styles.locationCard} ${isSelected ? styles.active : ''}`}>
        <div>
            <h3>
                <button
                    type="button"
                    className={styles.locationSelect}
                    onClick={onSelect}
                    aria-pressed={isSelected}
                >
                    {location.name}
                </button>
            </h3>
            <address>
                {location.address.street} <br />
                {location.address.city}, {location.address.state} {location.address.zip}
            </address>
        </div>

        <div className={styles.cardBtns}>
            <Link className={`${styles.btn} ${styles.pillBtn}`} to="/order">
                Order Pickup
            </Link>
            <Link className={`${styles.btn} ${styles.pillBtn}`} to="/order">
                Order Delivery
            </Link>
            <a
                className={`${styles.btn} ${styles.directionBtn}`}
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Get directions to ${location.name}`}
            >
                <img src={Directions} alt="" aria-hidden="true" />
            </a>
        </div>
       </article>
    )
}

export default LocationCard
