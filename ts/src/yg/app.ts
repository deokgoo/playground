import TimeTableRender from './src/timeTableRender';

const $app = document.querySelector('.app');
const $canvas = document.createElement('canvas');
$app.appendChild($canvas);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const ttr = new TimeTableRender(ctx, 300, 100, 100)
ttr.render();