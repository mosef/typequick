const ProgressBar = require('progressbar.js');

export default function onLoad(idname) {
  const circle = new ProgressBar.Circle(idname, {
    color: '#09EEAF',
    duration: 6000,
    easing: 'easeInOut',
    strokeWidth: 3,
  });

  circle.animate(1);
}
