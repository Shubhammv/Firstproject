$('body').append(`
  <div class="panel-toggle"><i class="fa fa-cog"></i></div>
  <div class="color-picker">
  <div class="selector" title="Color Picker">
    <span>&#9660;</span>
    <span class="color-preview"></span>
  </div>
  <input type="color" class="picker-widget" />
</div>`)
const colorPicker = $('.color-picker')
const pickerWidget = $('.picker-widget')
const panelToggle = $('.panel-toggle')
const colors = [
  {name: 'Star Yellow', chrome: '#aaaa22'},
  {name: 'Sky Blue', chrome: '#3082ab'},
  {name: 'Mint Green', chrome: '#2c9b8e'},
  {name: 'Warm Red', chrome: '#ba3636'}
]

panelToggle.on('click', () => {
  console.log('a')
  colorPicker.toggle()
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const root = document.documentElement;

const randomValue = getRandomInt(colors.length)
root.style.setProperty('--background', colors[randomValue].chrome);


for (const color of colors) {
  colorPicker.append(`<div class="color-picker-btn" title="${color.name}" style="background-color: ${color.chrome}"></div>`)
}


const colorPickerBtn = $('.color-picker-btn')

colorPickerBtn.on('click', function() {
  const color = $(this).css('background-color')
  root.style.setProperty('--background', color);
})

pickerWidget.on('change', function(e) {
  const color = e.target.value
  root.style.setProperty('--background', color);
})

$('.selector').on('click', function() {
  pickerWidget.click()
})