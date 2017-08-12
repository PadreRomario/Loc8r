module.exports.homelist = function(req, res) {
  res.render("locations-list", {
    title: "Loc8r - find places to work with WiFi near you!",
    pageHeader: {
      title: "Loc8r",
      sprapline: "Find places to work with WiFi near you!"
    },
    sidebar: "Loc8r helps you find places to work when out and about. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    locations: [{
      name: "Starcups",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 3,
      facilities: ["Hot drinks", "Food", "Premium WiFi"],
      distance: "100m"
    },{
      name: "Cafe Hero",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 4,
      facilities: ["Hot drinks", "Food", "Premium WiFi"],
      distance: "200m"
    },{
      name: "Burger Queen",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 2,
      facilities: ["Food", "Premium WiFi"],
      distance: "250m"
    },]
  });
};

module.exports.locationInfo = function(req, res) {
  res.render("location-info", {
    title: "Location info",
    sidebar: "Loc8r helps you find places to work when out and about. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: {
      name: "Starcups",
      address: "125 High Street, Reading, RG6 1PS",
      latitude: "51.455041",
      longitude: "-0.9690884",
      rating: 3,
      facilities: ["Hot drinks", "Food", "Premium WiFi"],
      distance: "100m",
      openHours: ["Monday - Friday : 7:00am - 7:00pm", "Saturday : 8:00am - 5:00pm", "Sunday : closed"]
    },
    reviews: [{
      author: "Roman Porturovskiy",
      rating: "4",
      review: "What a great place. I can't say enough good things about it.",
      timestamp: "16 July 2013"
    },{
      author: "Simon Holmes",
      rating: "5",
      review: "What a great place. I can't say enough good things about it.",
      timestamp: "16 July 2013"
    },{
      author: "Charlie Chaplin",
      rating: "3",
      review: "It was okay. Coffee wasn't great, but the WiFi was fast.",
      timestamp: "16 July 2013"
    }]
  });
};

module.exports.addReview = function(req, res) {
  res.render("location-review-form", {
    title: "Add review",
    header: "Review ",
    name: "Starcups"
  });
};
