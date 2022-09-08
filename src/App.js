import './App.css';
import SingUp from './components/SignUp'
import ContactRegister from './components/ContactRegister'
import SignIn from './components/SignIn';
import GroupRegister from './components/GroupRegister';
import PhoneRegister from './components/PhoneRegister';
import ContactList from './components/ContactList';
import PhoneList from './components/PhoneList';

function App() {
  return (
    <div>
      <SingUp />
      <br />
      <SignIn />
      <br />
      <ContactRegister />
      <br />
      <GroupRegister />
      <br />
      <PhoneRegister />
      <br />
      <ContactList />
      <br />
      <PhoneList />
      <br />
    </div>
  );
}

export default App;
