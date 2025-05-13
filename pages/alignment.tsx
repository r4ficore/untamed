
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Alignment() {
  const [nickname, setNickname] = useState('');
  const router = useRouter();

  const handleEnter = () => {
    if (nickname.trim()) {
      localStorage.setItem('untamed_id_source', nickname);
      router.push('/echo');
    }
  };

  return (
    <div style={{background: '#111', color: '#fff', padding: '2rem'}}>
      <h2>What do you want to awaken?</h2>
      <input placeholder="Type your name or symbol" value={nickname} onChange={e => setNickname(e.target.value)} style={{padding: '0.5rem', marginTop: '1rem'}} />
      <button onClick={handleEnter} style={{display: 'block', marginTop: '2rem'}}>ENTER</button>
    </div>
  );
}
