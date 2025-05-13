
import SHA256 from 'crypto-js/sha256';

export function generateUntamedID(nickname: string): string {
  const raw = `${nickname}::UNTAMED::${Date.now()}`;
  return SHA256(raw).toString().slice(0, 12).toUpperCase();
}
