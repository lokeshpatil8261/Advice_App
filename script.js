const advice = [
  {
    id: 92,
    advice: "You can have too much of a good thing.",
    date: "2016-08-09",
  },
  {
    id: 95,
    advice:
      "Good advice is something a man gives when he is too old to set a bad example.",
    date: "2016-09-15",
  },
  {
    id: 120,
    advice: "A nod is as good as a wink to a blind horse.",
    date: "2016-12-11",
  },
  {
    id: 122,
    advice:
      "You spend half your life asleep or in bed. It's worth spending money on a good mattress, decent pillows and a comfy duvet.",
    date: "2016-05-25",
  },
  {
    id: 174,
    advice: "Be a good lover.",
    date: "2014-06-03",
  },
  {
    id: 176,
    advice: "Good things come to those who wait.",
    date: "2017-02-04",
  },
  {
    id: 179,
    advice:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    date: "2016-12-03",
  },
  {
    id: 180,
    advice:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    date: "2015-06-24",
  },
  {
    id: 215,
    advice:
      "Once you find a really good friend don't do anything that could mess up your friendship.",
    date: "2016-03-01",
  },
];

function getAdvice() {
  // Pick a random object from the array
  const randomIndex = Math.floor(Math.random() * advice.length);
  const selected = advice[randomIndex];

  // Display advice
  document.getElementById("displayData").innerHTML = `
    <p><strong>Advice #${selected.id}</strong></p>
    <p>"${selected.advice}"</p>
    <p><small>Date: ${selected.date}</small></p>
  `;
}











// async function advice(){
//    let call =  await fetch("https://api.adviceslip.com/advice")
//    console.log(call);
//     let data = await call.json()
//     console.log(data)
//     let advice =data.slip.advice

//     let div = document.getElementById("advice")
//     advice.inneText = advice
//     div.append(advice) 
//     advice.inneText=" "
// }