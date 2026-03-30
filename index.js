const keys = ['a','s','d','f','g','h','j','k','l',';'];
let currentKeyIndex = 0;

const keyEl = document.getElementById('key');
const btn = document.getElementById('btn');


function updateKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyEl.textContent = keys[currentKeyIndex];
}

updateKey();


document.addEventListener('keydown', function(e) {
  if (e.key === keys[currentKeyIndex]) {
    PNotify.success({
      text: 'Правильно'
    });
    updateKey();
  } else {
    PNotify.error({
      text: 'Не та клавіша'
    });
  }
});


document.addEventListener('keypress', function(e) {
  e.preventDefault();
});


btn.addEventListener('click', function() {
  updateKey();
  PNotify.info({
    text: 'Нова гра'
  });
});



const chartData = {
  labels: ["1","2","3","4","5","6","7","8","9","10",
           "11","12","13","14","15","16","17","18","19","20",
           "21","22","23","24","25","26","27","28","29","30"],
  datasets: [{
    label: "Продажі",
    data: [150,220,180,200,250,300,280,350,400,380,
           420,450,500,550,600,650,700,750,800,850,
           900,950,1000,1050,1100,1150,1200,1250,1300,1350],
    borderColor: "blue",
    borderWidth: 2
  }]
};

const ctx = document.getElementById('sales-chart');

new Chart(ctx, {
  type: 'line',
  data: chartData
});