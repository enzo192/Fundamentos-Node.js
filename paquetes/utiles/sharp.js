const sharp = require('sharp');

sharp('original_JS.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');
