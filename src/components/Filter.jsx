import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <input
    className={styles.input}
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search contacts"
  />
);

export default Filter;
