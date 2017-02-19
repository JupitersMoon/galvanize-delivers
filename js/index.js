$(document).ready(function() {
    var subTotal = 0

    function fillTable() {
        subTotal += Number($(event.target).parent().parent().find('p').text().replace(/[^0-9\.]+/g, ""))
        console.log('subtotal: ' + subTotal);
        return subTotal
    }
    $('.addToOrder').click(function() { //  console.log('you clicked');
        var item = $(event.target).parent().parent().find('h5').text()
        var price = $(event.target).parent().parent().find('p').text()
        $('#tableBody').append($(`<tr><td>${item}</td><td>${price}</td></tr>`)) //   console.log('item, price:' + item, price);
        var subtotalValue = $('#subtotal').text(fillTable().toFixed(2))
        var taxValue = $('#tax').text(((fillTable() * 0.10).toFixed(2)))
        var totalValue = ((Number(subtotalValue.text()) + Number(taxValue.text())).toFixed(2))
        $("#total").text(totalValue)
    })
})
