import React from 'react';
import { getFunName } from '../helpers.js'

class StorePicker extends React.Component{
  goToStore(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from box
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value);
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
       <form  className="store-selector" onSubmit={(e) => this.goToStore(e)}>
          <h2>Please Enter a Store</h2>
          <input  type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
          <button type="submit">Visti Store -></button>
       </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
