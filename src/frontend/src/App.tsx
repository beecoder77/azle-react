import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState([]);

  function handleSubmit(event: any) {
    event.preventDefault();
    
    fetch(`${import.meta.env.VITE_CANISTER_URL}/submissionone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      setGreeting(json.articles);
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <main>
      <img src="https://catatmak.com/_next/image?url=%2Flogo%2Flogo-catatmak-3.png&w=3840&q=75" alt="CatatMak logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <button type="submit">Get ICP News!</button>
      </form>
      <section id="greeting">{JSON.stringify(greeting)}</section>
    </main >
  );
}

export default App;
