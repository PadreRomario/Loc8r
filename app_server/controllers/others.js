module.exports.about = function(req, res) {
  res.render('generic-text', {
    title: 'Loc8r - find places to work with WiFi near you!',
    header: 'About',
    subheading: 'Loc8r was created to help people find places to sit down and get a bit of work done.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  });
};
