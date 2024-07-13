import React from 'react';
import styles from './Loading.module.css';
import loadingVideo from '../vid/loader.mp4';

const Loading = ({ fade }) => {
  return (
    <div className={`${styles['loading-body']} ${fade ? styles['fade-out'] : ''}`}>
      <div className={styles.loading}>
        <div className={styles['video-container']}>
          <video autoPlay loop muted className={styles.video}>
            <source src={loadingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Loading;