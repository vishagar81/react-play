import React from 'react';
import BulletinBoardPage from './BulletinBoardPage';

class BulletinBoardPageWrapper extends React.Component {
  
  render(){
    return(
      <BulletinBoardPage count={15}/>
    )
  }
}
export default BulletinBoardPageWrapper;
