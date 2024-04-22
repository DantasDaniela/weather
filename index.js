
//SCRIPT VIA CEP//

async function getAdressByCep() {
const cep = document.getElementById('cep').value;
try {
const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
const data = await response.json();
console.log(data);
document.getElementById('Rua').value = data.logradouro;
document.getElementById('Bairro').value = data.bairro;
document.getElementById('cidade').value = data.localidade;
} catch (error) {
    alert("Por favor, preencha o campo de CEP corretamente para obter os dados!");
    
}

}
    //SCRIPT OPEN METEO//
    async function getPrevisao() {
        const Lat = document.getElementById("Latitude").value;
        const Lon = document.getElementById("Longitude").value;
        try {
          const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-22.8964379&longitude=-47.2044754&daily=temperature_2m_max&timezone=America%2FSao_Paulo&forecast_days=1`);
          const data = await response.json();
          console.log(data);
          document.getElementById('resposta').innerHTML = '';
          for (
              let index = 0;
               index < data.daily.temperature_2m_max.length;
                index++
              ) {
              document.getElementById(
                  'resposta'
              ).innerHTML += `<div> Previsão de tempo de acordo com a região: ${data.daily.temperature_2m_max[index] } °C </div>`;
                   
          }
        } catch (error) {
            alert("Por favor, preencha os campos de latitude e longitude corretamente para obter a previsão de tempo!");
        }
        
      } 
