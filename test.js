/**
 * @jest-environment jsdom
 */

const sampleDom = `
  <div id="btntext">ABC</div>
`


const $ = require('jquery');

function changeTitle() {
  $("#btntext").text("XYZ")
}
test('change title', () => {
  document.body.innerHTML = sampleDom;
  changeTitle()
  expect($('#btntext').text()).toEqual('XYZ');
})