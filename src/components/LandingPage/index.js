import React,{Component} from 'react';
import Content from './Content';
import '../../css/LandingPage.css'
class LandingPage extends Component {
    render()
    {
        return(
            <div className="Body-Main">
                <Content/>
            </div>
        )
    }
}

export default LandingPage;