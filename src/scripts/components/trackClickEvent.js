const trackClickEvent = (category, action, label) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    transport_type: 'beacon',
  });
  debugger;
};

export default trackClickEvent;
