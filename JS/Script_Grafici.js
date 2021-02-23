function disegnaGraficoLinea(datiGrafico)
{
  var inizio=datiGrafico[0];
  var secondoQuinto=datiGrafico[parseInt((datiGrafico.length/2)/2)];
  var meta=datiGrafico[parseInt(datiGrafico.length/2)];
  var quartoQuinto=datiGrafico[parseInt((datiGrafico.length/2)/2)+parseInt(datiGrafico.length/2)];
  var fine=datiGrafico[parseInt(datiGrafico.length-1)];
  new Chart(document.getElementById("line-chart"), 
  {
      type: 'line',
      data: 
      {
        labels: [inizio.label, secondoQuinto.label, meta.label, quartoQuinto.label, fine.label],
        datasets: 
        [
          { 
            data: [inizio.malati, secondoQuinto.malati, meta.malati, quartoQuinto.malati, fine.malati],
            label: "Contagiati",
            borderColor: "#ff0000",
            fill: false
          }, 
          { 
            data: [inizio.sani, secondoQuinto.sani, meta.sani, quartoQuinto.sani, fine.sani],
            label: "Sani",
            borderColor: "#008000",
            fill: false
          }, 
          { 
            data: [inizio.guariti, secondoQuinto.guariti, meta.guariti, quartoQuinto.guariti, fine.guariti],
            label: "Guariti",
            borderColor: "#0000ff",
            fill: false
          },
        ]
      },
      options: 
      {
        title: 
        {
          display: true,
          text: 'Condizioni COVID-19'
        }
      }
  });
}

function disegnaGraficoTorta(datiGrafico)
{
  console.log(datiGrafico);
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Contagiati", "Sani", "Guariti"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#ff0000", "#008000","#0000ff","#e8c3b9","#c45850"],
        data: [parseInt(datiGrafico.malati), parseInt(datiGrafico.sani), parseInt(datiGrafico.guariti)]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Valori metà simulazione COVID-19'
      }
    }
  });
}