import React from 'react'
import Image from 'next/image'
import styles from './BlockCard.module.css'
import axios from 'axios'

const BlockCardAdmin = ({ leftSideImage, data, number, getEvents }) => {
  const handleEdit = async () => {
    try {
      const eventId = data.id
      console.log('eventId:', eventId)
      await axios.put(`/api/events/?eventId=${eventId}`, data)
      getEvents()
    } catch (error) {
      console.error('Error editing event:', error)
    }
  }

  const handleDelete = async () => {
    try {
      const eventId = data.id
      console.log('eventId:', eventId)

      await axios.delete(`/api/events/?eventId=${eventId}`)
      getEvents()
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  return (
    <>
      <div className={styles.blockCardWrapper}>
        <div className={styles.blockCardMain}>
          <div>
            <button onClick={handleEdit} style={{ backgroundColor: 'yellow' }}>
              Edit
            </button>
            <button
              onClick={handleDelete}
              style={{ backgroundColor: 'yellow' }}
            >
              Delete
            </button>
          </div>
          <div
            className={`${styles.blockInfo} ${
              leftSideImage && styles.blockInfoLeft
            }`}
          >
            <div className={styles.blockNumber}>
              <h1>{number < 10 ? `0${number}` : number}</h1>
              <div className={styles.styleDiv}></div>
            </div>
            <div className={styles.blockName}>
              <h1>{data.title}</h1>
              <br />
              <h3>{data.start_month}</h3>
            </div>
            <div className={styles.blockInfo}>{data.description}</div>
            <div className={styles.knowMore}>
              <a href={data.url} target='_blank'>
                <div>Know More</div>
                <div className={styles.buttonImage}>
                  <Image
                    alt='button'
                    src='/Events/event-button.svg'
                    fill
                    priority
                  />
                </div>
              </a>
            </div>
          </div>
          <div
            className={`${styles.blockImageWrapper} ${
              leftSideImage && styles.blockImageWrapperLeft
            }`}
          >
            <div className={styles.blockImageCard}>
              <Image
                src={data.image_url}
                fill
                alt={
                  'https://drive.google.com/file/d/1NvfHESPsWNBuLEu7s6pRXmeg7kaVf2iA/view?usp=drive_link'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockCardAdmin
