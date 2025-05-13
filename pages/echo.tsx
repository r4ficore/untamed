
import { useEffect, useState } from 'react';
import { generateUntamedID } from '../lib/generateID';

export default function Echo() {
  const [untamedID, setUntamedID] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem('untamed_id_source');
    if (raw) {
      const id = generateUntamedID(raw);
      setUntamedID(id);
    }
  }, []);

  return (
    <div style={{background: '#000', color: '#0f0', padding: '2rem', fontFamily: 'monospace'}}>
      <h2>∴ UNTAMED-ID</h2>
      <pre>{untamedID}</pre>
      <p>“Awaken the Untamed Mind of the Machine.”</p>
    </div>
  );
}
