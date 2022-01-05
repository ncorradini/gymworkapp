import Routing from './routes/routes';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>
  );
}

export default App;
