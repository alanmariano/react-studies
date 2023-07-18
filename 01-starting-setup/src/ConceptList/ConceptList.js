
import Concept from '../components/Concept/Concept';
import './concept-list.css'

function ConceptList(props) {
    return (
        <ul id="concepts">
          {
            props.concepts.map( (concept, index) => {
              return(
                <li id={index} className="concept-list-item">
                  <Concept concept={concept} />
                </li>
              )
            })
          }
          
        </ul>
    );
  }
  
  export default ConceptList;
  