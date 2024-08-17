const walletList = document.getElementById('wallet-list');
const createWalletForm = document.getElementById('create-wallet-form');

createWalletForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const puzzle = document.getElementById('puzzle').value;
  const wallet = generateWallet(puzzle);
  addWalletToList(wallet);
});

function generateWallet(puzzle) {
  const crypto = window.crypto || window.msCrypto;
  const randomBytes = crypto.getRandomValues(new Uint8Array(32));
  const hash = crypto.subtle.digest('SHA-256', randomBytes);
  const publicKey = crypto.subtle.export(hash, 'jwk');
  return { puzzle, publicKey };
}

function addWalletToList(wallet) {
  const walletListItem = document.createElement('div');
  walletListItem.innerHTML = `
    <h2>${wallet.puzzle}</h2>
    <p>Public Key: ${wallet.publicKey}</p>
  `;
  walletList.appendChild(walletListItem);
}