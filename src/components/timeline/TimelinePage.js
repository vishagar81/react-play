import React from 'react';
import Header from './Header';
import Content from './Content';

class TimelinePage extends React.Component {
      constructor(props){
          super(props);
          this.state = {

  				};
      }

			render(){
        const activities = [
          {
            timestamp: new Date().getTime(),
            text: "Ate lunch",
            user: {
              id: 1, name: 'Nate',
              avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
            },
            comments: [{ from: 'Ari', text: 'Me too!' }]
          },
          {
            timestamp: new Date().getTime(),
            text: "Woke up early for a beautiful run",
            user: {
              id: 2, name: 'Ari',
              avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
            },
            comments: [{ from: 'Nate', text: 'I am so jealous' }]
          }
        ]
				return (
          <div className="notificationsFrame">
            <div className="panel">
              <Header headerText="Timeline" />
              <Content activities={activities} />
            </div>
          </div>
        );
      }
}
export default TimelinePage;
