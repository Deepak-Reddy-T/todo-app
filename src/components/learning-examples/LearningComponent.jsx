import FirstComponent from './FirstComponent'
import ThirdComponent from './ThirdComponent'
import {FourthComponent} from './FirstComponent'
import LearnJavaScript from './LearnJavaScript';


export default function LearningComponent() {
  return (
    <div className="LearningComponent">
      <FirstComponent></FirstComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <LearnJavaScript></LearnJavaScript>
    </div>
  );  
}