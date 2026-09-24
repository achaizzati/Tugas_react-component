import NavComponen from './components/header.jsx';
import ContaintComponen from './components/section.jsx';
import FooterComponen from './components/footer.jsx';
import './App.css';

function App() {
  return (
    <div className="website">
      <NavComponen />
      <ContaintComponen />
      <FooterComponen />
    </div>
  );
}

export default App;