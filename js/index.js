$(document).ready(function() {
    var subTotal = 0


    $('.addToOrder').click(function() { //  console.log('you clicked');
        var item = $(event.target).parent().parent().find('h5').text()
        var price = $(event.target).parent().parent().find('p').text()
        var subtotalValue = $('#subtotal').text(fillTable().toFixed(2))
        // console.log(subtotalValue);
        var taxValue = $('#tax').text((subtotalValue.text() * 0.10).toFixed(2))
        var totalValue = ((Number(subtotalValue.text()) + Number(taxValue.text())).toFixed(2))
        $('#tableBody').append($(`<tr><td>${item}</td><td>${price}</td></tr>`)) //   console.log('item, price:' + item, price);
        $("#total").text(totalValue)
    })

    function fillTable() {
        subTotal += Number($(event.target).parent().parent().find('p').text().slice(1)) // .replace(/[^0-9\.]+/g, "")
        //console.log('subtotal: ' + subTotal);
        return subTotal
    }

// TOAST
    $('.placeOrder').click(function toast() {

      var nameInput = $("#name").val()
      var lastNameInput = $("#lastName").val()
      var emailInput = $("#email").val()
      var addressInput = $("#address").val()
            // console.log(nameInput);

        if (subTotal > 0 && nameInput.length > 0 && lastNameInput.length > 0 && emailInput.length > 0 && addressInput.length > 0 && emailInput.includes('@')==true && emailInput.includes('.')==true) {
            alert('BLAST OFF!!! Your tasty food is on its way!')
        } else {
            alert('Mission Scrubbed: Please choose an item and complete all requested fields.')
            event.preventDefault() // stay on page
        }
    })
})
