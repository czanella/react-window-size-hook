import React from 'react';
import { useWindowSize } from './hooks';

import styles from './App.module.scss';

function App() {
  const [width, height] = useWindowSize();

  return (
    <div className={styles.app}>
      [{`${width},${height}`}]
    </div>
  );
}

export default App;
