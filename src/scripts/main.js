import navigationDropdowns from './components/navigationDropdowns';
import navigationMobile from './components/navigationMobile';
import getIPAddress from './components/getIPAddress'
// import requestPostsAndAttachtoPage from './components/requestsPosts';

// Initialize Application

const init = async () => {
  await getIPAddress();
}

init();

navigationDropdowns();
navigationMobile();

// requestPostsAndAttachtoPage('music', 8);