import './common/cssVariables.css';
import './common/globalStyles.css';
import GoodsList from './components/GoodsList/GoodsList';

function App() {
  return (
    <main>
      <h1 className="visuallyHidden">Order goods</h1>
      <GoodsList />
    </main>
  );
}

export default App;
