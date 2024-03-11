import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <h1>
        Go to third-party login
      </h1>
      <div style={{marginTop:'4rem'}}>
        <button style={{fontSize:'16px',background:'#9c25ff',color:'#ffffff',border:0,padding:'8px 32px',borderRadius:'4px',cursor:'pointer'}}
        onClick={async () => {
          router.push('https://sandbox-staging-app.berify.io/berify/thirdParty?apiKeyId={apiKeyId}}');
        }}>
          Log in
        </button>
      </div>
    </div>
  )
}