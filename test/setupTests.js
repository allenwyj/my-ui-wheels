const enzyme = require('enzyme');
// TODO: udpate from official once Enzyme released version for React 17
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

enzyme.configure({
  adapter: new Adapter()
});
