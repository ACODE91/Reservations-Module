import React from 'react';
import App from '../client/app/app.jsx';

import Enzyme from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('photo components', () => {
    let testerData = [
      {
        txt_description: faker.lorem.words(), 
        src: faker.image.imageUrl(),
        pictureId: 1
      },
      {
        txt_description: faker.lorem.words(), 
        src: faker.image.imageUrl(),
        pictureId: 2
      },
      {
        txt_description: faker.lorem.words(), 
        src: faker.image.imageUrl(),
        pictureId: 3
      },
      {
        txt_description: faker.lorem.words(), 
        src: faker.image.imageUrl(),
        pictureId: 4
      }
    ]
    
    let wrapper = Enzyme.mount(<Photo photos = {testerData}/>);
    console.log(wrapper)
    it('should render 4 photos', () => {
      expect(wrapper.find('.photogallery').children().length).toEqual(4);
    });
  
    it('should be contained in "photogallery div',() => {
      expect(wrapper.find('.photogallery'));
    })
  
  })

<RestaurantSearch 
qFn={this.findTable.bind(this)}
appStateQueried={this.state.queried}
appState={this.state}
/>