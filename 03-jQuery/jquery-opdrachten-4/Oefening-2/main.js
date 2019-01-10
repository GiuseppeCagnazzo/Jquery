$(document).ready(function() {

  let netto = 0;
  let bruto, geslacht, aantalKinderen, gender
  // let gender = $("#gender option:selected").text();
  // console.log(gender);
  $('#gender').on('change', function() {
    //var optionValue = $(this).val();
    //var optionText = $('#dropdownList option[value="'+optionValue+'"]').text();
    gender = $("#gender option:selected").text();
    console.log(gender);
  });
  $("#bruto").keyup(function() {
    bruto = parseInt($("#bruto").val());
    console.log(bruto);
  })
  $("#geslacht").keyup(function() {
    geslacht = $("#geslacht").val();
    console.log(geslacht);
  })
  $("#aantalK").keyup(function() {
    aantalKinderen = parseInt($("#aantalK").val());
    console.log(aantalKinderen);
  })

  $("#netto-btn").click(function(event) {
    event.preventDefault();
    let netto = parseInt(bruto - (bruto * 0.18) - (bruto * 0.07) - (bruto * 0, 05));
    if (gender === "woman") {
      netto = netto - ((netto / 100) * 2);
      $("#netto").val(netto);
    } else if (aantalKinderen === 3) {
      netto = netto - ((netto / 100) * 1);
      $("#netto").val(netto);
    } else if (aantalKinderen === 4) {
      netto = netto - ((netto / 100) * 2);
      $("#netto").val(netto);
    } else {
      $("#netto").val(netto);
    }

  })

});





// bruto - (bruto * 0.18) - (bruto * 0.07) - (bruto * 0,05);
