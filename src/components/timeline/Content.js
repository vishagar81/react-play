import React from 'react';

class Content extends React.Component {
      constructor(props){
          super(props);
          this.state = {

  				};
      }

			render(){
        const {activities} = this.props;
				return (
          <div className="content">
            <div className="line"></div>
            {activities.map(function(activity) {
                return(
                  <div className="item" key={activity.user.id}>
                    <div className="avatar">
                      <img src={activity.user.avatar} />
                      {activity.user.name}
                    </div>

                    <span className="time">
                      {activity.timestamp}
                    </span>
                    <p>{activity.text}</p>
                    <div className="commentCount">
                      {activity.comments.length}
                    </div>
                  </div>
                );
            })}
          </div>
        );
      }
}
export default Content;
