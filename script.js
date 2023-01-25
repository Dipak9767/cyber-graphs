const menuBtn = document.getElementById('menu-btn');

let expandMenu = false;

menuBtn.addEventListener('click', () => {
  const menuLinks = document.querySelectorAll('#menu-link')
  const chartContainer = document.getElementById('chart-container');
  const menuContainer = document.getElementById('menu-container');

  if (expandMenu) {
    menuBtn.src = './images/menu.png'
    menuContainer.classList.remove('expanded')
    menuBtn.style.alignSelf = 'center'
    menuLinks.forEach((link) => link.style.display = 'none')
    expandMenu = !expandMenu
  } else {
    menuContainer.classList.add('expanded')
    menuBtn.src = './images/cancel.png'
    menuBtn.style.alignSelf = 'flex-end'
    menuLinks.forEach((link) => link.style.display = 'block')
    expandMenu = !expandMenu
  }
})



const LineChart = () => {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    // Set Data
    let data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [50, 7], [60, 8], [70, 8], [80, 9], [90, 9],
      [100, 9], [110, 10], [120, 11],
      [130, 14], [140, 14], [150, 15]
    ]);
    // Set Options
    let options = {
      title: 'Blok Malware Activity',
      hAxis: { title: 'Square Meters' },
      vAxis: { title: 'Price in Millions' },
      legend: 'none'
    };
    // Draw
    let chart = new google.visualization.LineChart(document.getElementById('LineChart'));
    chart.draw(data, options);
  }
}
const BarChart = () => {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ['years', 'sales'],
      ['Win32/MyWebSearch', 55],
      ['AndroidOS', 49],
      ['Win95', 44],
      ['Win32/Rando', 24],
      ['HTML/Iframe', 15]
    ]);


    let options = {
      title: 'Top Viruses/Malwares'
    };

    let chart = new google.visualization.BarChart(document.getElementById('BarChart'));
    chart.draw(data, options);
  }
}

const PieChart = () => {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ['users', 'percentage'],
      ['Administrator', 14],
      ['John', 54.8],
      ['Alexa', 48.6],
      ['Kevin', 44.4],
      ['Dong', 23.9],
    ]);

    let options = {
      title: 'Top Infected Users',
      pieHole: 0.4
    };

    let chart = new google.visualization.PieChart(document.getElementById('PieChart'));
    chart.draw(data, options);
  }
}

const ColumnChart = () => {
  google.charts.load("current", { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ["dates", "Viruses", { role: "style" }],
      ["1 nov", 8.94, "blue"],
      ["2 nov", 10.49, "blue"],
      ["3 nov", 19.30, "blue"],
      ["4 nov", 21.45, "blue"],
      ["5 nov", 11.45, "blue"],
      ["6 nov", 15.45, "blue"],
      ["7 nov", 25.45, "blue"],
    ]);

    let view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
      },
      2]);

    let options = {
      title: "Viruses Trojon Caught (7days)",
    };
    let chart = new google.visualization.ColumnChart(document.getElementById("ColumnChart"));
    chart.draw(view, options);
  }
}


const BarChart2 = () => {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ['opening move', 'percentge'],
      ["172", 55],
      ['192', 49],
      ['172', 44],
    ]);


    let options = {
      title: 'Top Malware Requesters'
    };

    let chart = new google.visualization.BarChart(document.getElementById('BarChart2'));
    chart.draw(data, options);
  }
}
const MapChart = () => {
  google.charts.load('current', {
    'packages': ['map'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'

  });
  google.charts.setOnLoadCallback(drawMap);

  function drawMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Population'],
      ['China', 'China: 1,363,800,000'],
      ['India', 'India: 1,242,620,000'],
      ['US', 'US: 317,842,000'],
      ['Indonesia', 'Indonesia: 247,424,598'],
      ['Brazil', 'Brazil: 201,032,714'],
      ['Pakistan', 'Pakistan: 186,134,000'],
      ['Nigeria', 'Nigeria: 173,615,000'],
      ['Bangladesh', 'Bangladesh: 152,518,015'],
      ['Russia', 'Russia: 146,019,512'],
      ['Japan', 'Japan: 127,120,000']
    ]);

    var options = {
      showTooltip: true,
      showInfoWindow: true
    };

    var map = new google.visualization.Map(document.getElementById('MapChart'));

    map.draw(data, options);
  };
}

const Table = () => {
  $(document).ready(function () {
    $('#example').DataTable();
});
}

LineChart();
BarChart();
BarChart2();
PieChart();
ColumnChart();
MapChart();
Table();
