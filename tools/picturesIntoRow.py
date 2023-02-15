# script for making the scrolling banners on the hero for holymahogany.com

from PIL import Image

pathRoot = "public/static/img/hero/"
pathExt = ".webp"

images1 = [
  pathRoot + "figure1" + pathExt,
  pathRoot + "object1" + pathExt,
  pathRoot + "figure2" + pathExt,
  pathRoot + "object2" + pathExt,
  pathRoot + "figure3" + pathExt,
  pathRoot + "object3" + pathExt,
  pathRoot + "figure4" + pathExt,
  pathRoot + "object4" + pathExt,
]
images2 = [
  pathRoot + "object5" + pathExt,
  pathRoot + "figure5" + pathExt,
  pathRoot + "object6" + pathExt,
  pathRoot + "figure6" + pathExt,
  pathRoot + "object7" + pathExt,
  pathRoot + "figure8" + pathExt,
  pathRoot + "object8" + pathExt,
  pathRoot + "figure9" + pathExt,
]

def picturesIntoRow(imgPaths, outputName):
  iconSize = 500 # pixels
  gapBetweenIcons = 125 # pixels
  timesToRepeat = 1

  canvasWidth = ((iconSize * len(imgPaths)) + (gapBetweenIcons * len(imgPaths))) * timesToRepeat
  canvas = Image.new("RGBA", (canvasWidth, iconSize), (255, 255, 255, 0))
  x = 0

  for i in range(timesToRepeat):
    for path in imgPaths:
      im = Image.open(path)
      im = im.resize((iconSize, iconSize))
      canvas.paste(im, (x, 0))
      x = x + iconSize + gapBetweenIcons

  canvas.save(outputName + ".webp", format="webp")

picturesIntoRow(images1, "toprow")
picturesIntoRow(images2, "bottomrow")
