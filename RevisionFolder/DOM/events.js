function onfocus1() {
    document.getElementById('123').style.backgroundColor="green"

}
function onblur1() {
    let tag_ref = document.getElementById("321")
    data = tag_ref.value
    tag_ref.value = data.toUpperCase()
}