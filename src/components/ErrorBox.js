import React from 'react';
import { useEffect } from 'react';
import styles from './ErrorBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function ErrorBox() {
  const [error, setError] = React.useState(null);
  const [copied, setCopied] = React.useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('e');
    setError(error);
  });

  if (!error) return null;

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faExclamationTriangle} className={styles.icon} />
      <p className={styles.text}>
        You were redirected here from an error message. For reference, here's
        what it was.
      </p>
      <div className={styles.error}>
        <p className={styles.errorText}>{error}</p>
      </div>
      <div className={styles.taskbar}>
        <p className={styles.copied}>{copied ? 'Copied!' : ''}</p>
        <button
          className={styles.button}
          onClick={() => {
            navigator.clipboard.writeText(error);
            setCopied(true);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
