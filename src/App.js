import photo from './photo.jpg'
import Profile from './profile/Profile';
import PropTypes from "prop-types";
import './App.css'
function App() {
  const fullName="Rihab Aidi"
  const bio="Computer science student, 22 years old, lives in Aouina Tunisia .Currently I still study computer science at university Essect montfleury Tunis, baccalaureate economy 2019"
  const profession="Computer science student"
  const handleName =(fullName)=>alert(fullName)
  const style={width:'60%' ,height:'700px',transform:"translate(35%, 0%)",borderRadius:'5%' ,boxShadow:" 1px 1px 10px #aaaaaa"}
  return (
    <div  style={style}>
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName(fullName)} >
        <img src={photo} alt='image'style={{width:'50%' ,height:'500px' ,transform:"translate(50%, 4%)",borderRadius:'50%'}}/>
        </Profile>
      
      
    </div>
  );
}

export default App;

Profile.defaultProps = {
  fullName:"Rihab Aidi",
  bio:"Computer science student, 22 years old, lives in Aouina Tunisia .Currently I still study computer science at university Essect montfleury Tunis, baccalaureate economy 2019",
  profession:"Computer science student",
  handleName :(fullName)=>alert(fullName)
  
}
Profile.propTypes = {
  fullName: PropTypes.string ,
  bio: PropTypes.string ,
  profession: PropTypes.string,
  handleName:PropTypes.func

};